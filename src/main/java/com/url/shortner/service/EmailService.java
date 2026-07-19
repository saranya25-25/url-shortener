package com.url.shortner.service;

import com.resend.Resend;
import com.resend.services.emails.model.CreateEmailOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${resend.api.key}")
    private String apiKey;

    // ===========================
    // Welcome Email
    // ===========================
    public void sendWelcomeEmail(String toEmail, String username) {

        try {
            Resend resend = new Resend(apiKey);

            CreateEmailOptions params = CreateEmailOptions.builder()
                    .from("LinkForge <onboarding@resend.dev>")
                    .to(toEmail)
                    .subject("🎉 Welcome to LinkForge")
                    .html("""
                            <div style="font-family:Arial,sans-serif;padding:20px">
                                <h2>Welcome to LinkForge 🚀</h2>

                                <p>Hello <b>%s</b>,</p>

                                <p>Your account has been created successfully.</p>

                                <p>You can now:</p>

                                <ul>
                                    <li>✅ Shorten URLs</li>
                                    <li>✅ Track Analytics</li>
                                    <li>✅ Manage your links securely</li>
                                </ul>

                                <br>

                                <p>Happy Shortening!</p>

                                <h3>Team LinkForge ❤️</h3>
                            </div>
                            """.formatted(username))
                    .build();

            resend.emails().send(params);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ===========================
    // OTP Email
    // ===========================
    public void sendOtpEmail(String toEmail, String username, String otp) {

        try {
            Resend resend = new Resend(apiKey);

            CreateEmailOptions params = CreateEmailOptions.builder()
                    .from("LinkForge <onboarding@resend.dev>")
                    .to(toEmail)
                    .subject("🔐 LinkForge Password Reset OTP")
                    .html("""
                            <div style="font-family:Arial,sans-serif;padding:20px">
                                <h2>Password Reset Request</h2>

                                <p>Hello <b>%s</b>,</p>

                                <p>Your One-Time Password (OTP) is:</p>

                                <h1 style="color:#2563eb;letter-spacing:4px;">%s</h1>

                                <p>This OTP is valid for <b>5 minutes</b>.</p>

                                <p>If you didn't request a password reset, please ignore this email.</p>

                                <br>

                                <p>Team LinkForge ❤️</p>
                            </div>
                            """.formatted(username, otp))
                    .build();

            resend.emails().send(params);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}