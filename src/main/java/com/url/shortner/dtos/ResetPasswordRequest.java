package com.url.shortner.dtos;

import lombok.Data;

@Data
public class ResetPasswordRequest {

    private String email;

    private String newPassword;

}