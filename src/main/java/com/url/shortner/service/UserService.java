package com.url.shortner.service;

import com.url.shortner.dtos.LoginRequest;
import com.url.shortner.models.User;
import com.url.shortner.repository.UserRepository;
import com.url.shortner.security.jwt.JwtAuthenticationResponse;
import com.url.shortner.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final EmailService emailService;

    // ===========================
    // Register User
    // ===========================
    public User registerUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already taken");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(user);

        emailService.sendWelcomeEmail(
                savedUser.getEmail(),
                savedUser.getUsername()
        );

        return savedUser;
    }

    // ===========================
    // Login User
    // ===========================
    public JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest) {

        System.out.println("========== LOGIN START ==========");
        System.out.println("Username : " + loginRequest.getUsername());

        try {

            Authentication authentication =
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    loginRequest.getUsername(),
                                    loginRequest.getPassword()
                            )
                    );

            System.out.println("Authentication Successful");

            SecurityContextHolder
                    .getContext()
                    .setAuthentication(authentication);

            UserDetailsImpl userDetails =
                    (UserDetailsImpl) authentication.getPrincipal();

            String jwt = jwtUtils.generateToken(userDetails);

            User user = userRepository.findByUsername(loginRequest.getUsername())
                    .orElseThrow(() ->
                            new UsernameNotFoundException("User not found"));

            emailService.sendLoginAlertEmail(
                    user.getEmail(),
                    user.getUsername()
            );

            System.out.println("JWT Generated Successfully");

            return new JwtAuthenticationResponse(jwt);

        } catch (BadCredentialsException e) {

            System.out.println("Bad Credentials");
            throw e;

        } catch (Exception e) {

            System.out.println("Authentication Failed");
            throw e;
        }
    }

    // ===========================
    // Find User By Username
    // ===========================
    public User findByUsername(String username) {

        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                "User not found with username: " + username
                        ));
    }
}