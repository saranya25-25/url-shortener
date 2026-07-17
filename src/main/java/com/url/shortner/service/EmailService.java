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

        message.setFrom("saranyanekkanti165@gmail.com"); // Verified sender in Brevo
        message.setTo(email); // Registered user's email
        message.setSubject("Welcome to LinkForge");

        message.setText(
                "Hi " + username + ",\n\n" +
                        "Your account has been created successfully.\n\n" +
                        "Welcome to LinkForge!\n\n" +
                        "Thank you."
        );

        javaMailSender.send(message);
    }
}