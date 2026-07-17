package com.url.shortner.repository;

import com.url.shortner.models.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpVerificationRepository
        extends JpaRepository<OtpVerification, Long> {


    Optional<OtpVerification> findByEmailAndOtp(
            String email,
            String otp
    );


    Optional<OtpVerification> findTopByEmailOrderByIdDesc(
            String email
    );
}