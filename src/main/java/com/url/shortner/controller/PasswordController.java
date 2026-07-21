package com.url.shortner.controller;


import com.url.shortner.dtos.ForgotPasswordRequest;
import com.url.shortner.dtos.ResetPasswordRequest;
import com.url.shortner.dtos.VerifyOtpRequest;
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

        String response =
                passwordResetService.generateOtp(
                        request.getEmail()
                );


        return ResponseEntity.ok(response);
    }





    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(
            @RequestBody VerifyOtpRequest request
    ){

        String response =
                passwordResetService.verifyOtp(
                        request.getEmail(),
                        request.getOtp()
                );


        return ResponseEntity.ok(response);
    }





    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(
            @RequestBody ResetPasswordRequest request
    ){

        String response =
                passwordResetService.resetPassword(
                        request.getEmail(),
                        request.getNewPassword()
                );


        return ResponseEntity.ok(response);
    }

}