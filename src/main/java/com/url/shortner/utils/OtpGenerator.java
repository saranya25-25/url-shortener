package com.url.shortner.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class OtpGenerator {

    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";

    public static String generateOtp() {

        Random random = new Random();
        List<Character> otpChars = new ArrayList<>();

        // Generate 3 letters
        for (int i = 0; i < 3; i++) {
            otpChars.add(LETTERS.charAt(random.nextInt(LETTERS.length())));
        }

        // Generate 3 digits
        for (int i = 0; i < 3; i++) {
            otpChars.add(DIGITS.charAt(random.nextInt(DIGITS.length())));
        }

        // Shuffle so letters and digits are mixed
        Collections.shuffle(otpChars);

        StringBuilder otp = new StringBuilder();
        for (char ch : otpChars) {
            otp.append(ch);
        }

        return otp.toString();
    }
}