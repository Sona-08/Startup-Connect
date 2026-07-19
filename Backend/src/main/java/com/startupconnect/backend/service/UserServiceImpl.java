package com.startupconnect.backend.service;


import com.startupconnect.backend.dto.AuthResponse;
import com.startupconnect.backend.dto.RegisterRequest;
import com.startupconnect.backend.jwt.JwtService;
import com.startupconnect.backend.model.User;
import com.startupconnect.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.startupconnect.backend.dto.LoginRequest;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserServiceImpl(UserRepository repository,
                           PasswordEncoder passwordEncoder,
                           JwtService jwtService) {

        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (repository.existsByEmail(request.getEmail())) {
            return new AuthResponse("Email already exists", null);        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        // Encrypt Password
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(request.getRole());

        repository.save(user);

        return new AuthResponse("User Registered Successfully", null);    }

    @Override
    public AuthResponse login(LoginRequest request) {

        Optional<User> optionalUser = repository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {
            return new AuthResponse("Email not found", null);
        }

        User user = optionalUser.get();

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new AuthResponse("Invalid Password", null);
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse("Login Successful", token);
    }
}
