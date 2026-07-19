package com.url.shortner.service;

import com.url.shortner.models.OtpVerification;
import com.url.shortner.models.User;
import com.url.shortner.repository.OtpVerificationRepository;
import com.url.shortner.repository.UserRepository;
import com.url.shortner.utils.OtpGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PasswordResetService {


    private final UserRepository userRepository;
    private final OtpVerificationRepository otpRepository;
    private final EmailService emailService;


    public String generateOtp(String email){

        System.out.println("FORGOT EMAIL = " + email);
        System.out.println("TOTAL USERS = " + userRepository.count());
        User user = userRepository.findByEmail(email)
                .orElseThrow(
                        () -> new RuntimeException("Email not registered")
                );


        // Remove previous OTP
//        otpRepository.findByEmail(email)
//                .ifPresent(otpRepository::delete);

        otpRepository.deleteByEmail(email);

        String otp = OtpGenerator.generateOtp();



        OtpVerification otpVerification =
                new OtpVerification();


        otpVerification.setEmail(email);

        otpVerification.setOtp(otp);

        otpVerification.setExpiryTime(
                LocalDateTime.now().plusMinutes(5)
        );


        otpRepository.save(otpVerification);



        emailService.sendOtpEmail(
                email,
                user.getUsername(),
                otp
        );


        return "OTP sent successfully";

    }

}