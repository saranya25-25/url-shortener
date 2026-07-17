package com.url.shortner.dtos;

import lombok.Data;

@Data
public class VerifyOtpRequest {

    private String email;

    private String otp;

}