package com.url.shortner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class EmailService {


    private final JavaMailSender javaMailSender;


    public void sendRegistrationEmail(String email, String username) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("saranyanekkanti165@gmail.com");
        message.setTo(email);
        message.setSubject("Welcome to LinkForge");

        message.setText(
                "Hi " + username + ",\n\n" +
                        "Your account has been created successfully.\n\n" +
                        "Welcome to LinkForge!\n\n" +
                        "Thank you."
        );

        javaMailSender.send(message);
    }



    public void sendOtpEmail(
            String email,
            String username,
            String otp
    ) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("saranyanekkanti165@gmail.com");
        message.setTo(email);
        message.setSubject("LinkForge Password Reset OTP");


        message.setText(
                "Hi " + username + ",\n\n" +
                        "Your password reset verification code is:\n\n" +
                        otp +
                        "\n\n" +
                        "This OTP is valid for 5 minutes.\n\n" +
                        "If you did not request this password reset, ignore this email.\n\n" +
                        "Thank you,\n" +
                        "LinkForge Team"
        );


        javaMailSender.send(message);
    }

}