package com.url.shortner.utils;

import java.security.SecureRandom;

public class OtpGenerator {

    private static final String CHARACTERS =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    private static final SecureRandom random = new SecureRandom();

    public static String generateOtp() {

        StringBuilder otp = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            otp.append(
                    CHARACTERS.charAt(
                            random.nextInt(CHARACTERS.length())
                    )
            );
        }

        return otp.toString();
    }
}