package com.startupconnect.backend.controller;

import com.startupconnect.backend.dto.AIAnalysisRequest;
import com.startupconnect.backend.dto.AIAnalysisResponse;
import com.startupconnect.backend.service.AIAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:3000")
public class AIAnalysisController {

    @Autowired
    private AIAnalysisService aiAnalysisService;

    @PostMapping("/analyze")
    public AIAnalysisResponse analyzeStartup(
            @RequestBody AIAnalysisRequest request) {

        return aiAnalysisService.analyzeStartup(request);
    }
}