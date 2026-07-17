package com.url.shortner.utils;

import java.util.Random;

public class OtpGenerator {


    private static final String CHARACTERS =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


    public static String generateOtp(){

        StringBuilder otp = new StringBuilder();

        Random random = new Random();


        for(int i=0;i<8;i++){

            int index = random.nextInt(CHARACTERS.length());

            otp.append(CHARACTERS.charAt(index));

        }

        return otp.toString();
    }
}