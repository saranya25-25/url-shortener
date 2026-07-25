package com.url.shortner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class EmailService {
    @Value("${mail.from}")
    private String mailFrom;

    @Value("${spring.mail.host}")
    private String mailHost;

    @Value("${spring.mail.username}")
    private String mailUsername;
    private final JavaMailSender mailSender;

    // ===========================
    // Welcome Email
    // ===========================
    public void sendWelcomeEmail(String toEmail, String username) {

        System.out.println("EMAIL METHOD STARTED");

        try {

            System.out.println("Creating Mail Message");

            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom(mailFrom);
            message.setTo(toEmail);
            message.setSubject("Welcome to LinkForge");
            message.setText("Hello " + username);

            System.out.println("Calling mailSender.send()");

            mailSender.send(message);

            System.out.println("EMAIL SENT SUCCESSFULLY");

        } catch (Exception e) {

            System.out.println("EMAIL FAILED");

            e.printStackTrace();

            throw new RuntimeException(e);
        }
    }

    // ===========================
    // Password Reset OTP Email
    // ===========================
    public void sendOtpEmail(String toEmail, String username, String otp) {

        try {
            System.out.println("========== EMAIL DEBUG ==========");
            System.out.println("MAIL HOST : " + mailHost);
            System.out.println("MAIL USER : " + mailUsername);
            System.out.println("MAIL FROM : " + mailFrom);
            System.out.println("=================================");

            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom(mailFrom);
            message.setTo(toEmail);
            message.setSubject("🔐 LinkForge Password Reset OTP");
            message.setText(
                    "Hello " + username + ",\n\n" +
                            "We received a request to reset your LinkForge account password.\n\n" +
                            "🔑 Your One-Time Password (OTP):\n\n" +
                            otp +
                            "\n\n⏳ This OTP is valid for 5 minutes.\n\n" +
                            "⚠️ If you didn't request a password reset, please ignore this email. Your account remains secure.\n\n" +
                            "Regards,\n❤️ Team LinkForge"
            );

            mailSender.send(message);

            System.out.println("OTP EMAIL SENT : " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ===========================
    // Password Changed Email
    // ===========================
    public void sendPasswordChangedEmail(String toEmail, String username) {

        try {

            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo(toEmail);
            message.setSubject("✅ Your LinkForge Password Was Changed");
            message.setText(
                    "Hello " + username + ",\n\n" +
                            "🎉 Your LinkForge account password has been changed successfully.\n\n" +
                            "🔒 Your account is now protected with your new password.\n\n" +
                            "If you made this change, no further action is required.\n\n" +
                            "⚠️ If you did NOT change your password, please reset your password immediately and contact our support team.\n\n" +
                            "Thank you for helping us keep your account secure.\n\n" +
                            "Regards,\n❤️ Team LinkForge"
            );

            mailSender.send(message);

            System.out.println("PASSWORD CHANGED EMAIL SENT : " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ===========================
    // Login Alert Email
    // ===========================
    public void sendLoginAlertEmail(String toEmail, String username) {

        try {

            SimpleMailMessage message = new SimpleMailMessage();

            String date = LocalDateTime.now().format(
                    DateTimeFormatter.ofPattern("dd MMM yyyy")
            );

            String time = LocalDateTime.now().format(
                    DateTimeFormatter.ofPattern("hh:mm a")
            );

            message.setTo(toEmail);
            message.setSubject("🔐 New Login to Your LinkForge Account");
            message.setText(
                    "Hello " + username + ",\n\n" +
                            "We noticed a successful login to your LinkForge account.\n\n" +
                            "📅 Date : " + date + "\n" +
                            "🕒 Time : " + time + "\n\n" +
                            "If this was you, no further action is required.\n\n" +
                            "⚠️ If you don't recognize this login, please change your password immediately to secure your account.\n\n" +
                            "Thank you for using LinkForge.\n\n" +
                            "Regards,\n❤️ Team LinkForge"
            );

            mailSender.send(message);

            System.out.println("LOGIN ALERT EMAIL SENT : " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}