package com.url.shortner.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name="otp_verification")
public class OtpVerification {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String email;


    private String otp;


    private LocalDateTime expiryTime;

    @Column(nullable = false)
    private boolean verified = false;

}