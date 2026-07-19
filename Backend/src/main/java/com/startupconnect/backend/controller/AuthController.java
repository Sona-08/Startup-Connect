package com.startupconnect.backend.controller;

import com.startupconnect.backend.dto.AuthResponse;
import com.startupconnect.backend.dto.RegisterRequest;
import com.startupconnect.backend.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.startupconnect.backend.dto.LoginRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {

        return service.register(request);

    }
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return service.login(request);
    }
}
