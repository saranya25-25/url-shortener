package com.url.shortner.service;

import com.url.shortner.models.OtpVerification;
import com.url.shortner.models.User;
import com.url.shortner.repository.OtpVerificationRepository;
import com.url.shortner.repository.UserRepository;
import com.url.shortner.utils.OtpGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PasswordResetService {

    private final UserRepository userRepository;
    private final OtpVerificationRepository otpRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public String generateOtp(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email not registered"));

        otpRepository.deleteByEmail(email);

        String otp = OtpGenerator.generateOtp();

        OtpVerification otpVerification = new OtpVerification();
        otpVerification.setEmail(email);
        otpVerification.setOtp(otp);
        otpVerification.setExpiryTime(LocalDateTime.now().plusMinutes(5));
        otpVerification.setVerified(false);

        otpRepository.save(otpVerification);

        emailService.sendOtpEmail(
                email,
                user.getUsername(),
                otp
        );

        return "OTP sent successfully";
    }

    @Transactional
    public String verifyOtp(String email, String otp) {

        OtpVerification otpVerification = otpRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("OTP not found"));

        if (otpVerification.getExpiryTime().isBefore(LocalDateTime.now())) {
            otpRepository.deleteByEmail(email);
            throw new RuntimeException("Your OTP has expired. Please request a new one.");
        }

        if (!otpVerification.getOtp().equals(otp)) {
            throw new RuntimeException("The OTP you entered is incorrect. Please try again.");
        }

        otpVerification.setVerified(true);
        otpRepository.save(otpVerification);

        return "OTP verified successfully";
    }

    @Transactional
    public String resetPassword(String email, String newPassword) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        OtpVerification otpVerification = otpRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Please verify your OTP first."));

        if (!otpVerification.isVerified()) {
            throw new RuntimeException("Please verify your OTP first.");
        }

        if (otpVerification.getExpiryTime().isBefore(LocalDateTime.now())) {
            otpRepository.deleteByEmail(email);
            throw new RuntimeException("Your OTP has expired. Please request a new one.");
        }

        if (passwordEncoder.matches(newPassword, user.getPassword())) {
            throw new RuntimeException("New password cannot be the same as your current password.");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        otpRepository.deleteByEmail(email);

        emailService.sendPasswordChangedEmail(
                user.getEmail(),
                user.getUsername()
        );

        return "Password reset successfully";
    }
}