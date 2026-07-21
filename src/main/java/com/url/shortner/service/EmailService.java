package com.url.shortner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    // ===========================
    // Welcome Email
    // ===========================
    public void sendWelcomeEmail(String toEmail, String username) {

        try {

            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo(toEmail);
            message.setSubject("🎉 Welcome to LinkForge");
            message.setText(
                    "Welcome to LinkForge 🚀\n\n" +
                            "Hello " + username + ",\n\n" +
                            "Your account has been created successfully.\n\n" +
                            "You can now:\n" +
                            "✅ Shorten URLs\n" +
                            "✅ Track Analytics\n" +
                            "✅ Manage your links securely\n\n" +
                            "Happy Shortening!\n\n" +
                            "Team LinkForge ❤️"
            );

            mailSender.send(message);

            System.out.println("WELCOME EMAIL SENT : " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ===========================
    // OTP Email
    // ===========================
    public void sendOtpEmail(
            String toEmail,
            String username,
            String otp
    ) {

        try {

            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo(toEmail);
            message.setSubject("🔐 LinkForge Password Reset OTP");
            message.setText(
                    "Password Reset Request 🔐\n\n" +
                            "Hello " + username + ",\n\n" +
                            "Your One-Time Password (OTP) is:\n\n" +
                            otp +
                            "\n\nThis OTP is valid for 5 minutes.\n\n" +
                            "If you didn't request this password reset, ignore this email.\n\n" +
                            "Team LinkForge ❤️"
            );

            mailSender.send(message);

            System.out.println("OTP EMAIL SENT : " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}