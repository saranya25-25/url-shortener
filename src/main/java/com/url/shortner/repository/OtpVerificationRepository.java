package com.url.shortner.repository;

import com.url.shortner.models.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface OtpVerificationRepository
        extends JpaRepository<OtpVerification, Long> {
    Optional<OtpVerification> findByEmail(String email);
    @Modifying
    @Transactional
    void deleteByEmail(String email);

}