package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.ReadinessScore;
import com.startupconnect.backend.service.ReadinessScoreService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/readiness")
@CrossOrigin(origins = "*")
public class ReadinessScoreController {

    private final ReadinessScoreService service;

    public ReadinessScoreController(ReadinessScoreService service) {
        this.service = service;
    }

    @PostMapping("/{startupId}")
    public ReadinessScore calculateScore(@PathVariable Long startupId) {
        return service.calculateScore(startupId);
    }

    @GetMapping("/{startupId}")
    public ReadinessScore getScore(@PathVariable Long startupId) {
        return service.getScore(startupId);
    }
}