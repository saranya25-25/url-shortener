package com.url.shortner.controller;


import com.url.shortner.dtos.ForgotPasswordRequest;
import com.url.shortner.service.PasswordResetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth/public")
@RequiredArgsConstructor
public class PasswordController {


    private final PasswordResetService passwordResetService;


    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(
            @RequestBody ForgotPasswordRequest request
    ){

        passwordResetService.generateOtp(
                request.getEmail()
        );

        return ResponseEntity.ok(
                "OTP sent successfully"
        );
    }

}