package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.AuthResponse;
import com.startupconnect.backend.dto.LoginRequest;
import com.startupconnect.backend.dto.RegisterRequest;

public interface UserService {

    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);

}
