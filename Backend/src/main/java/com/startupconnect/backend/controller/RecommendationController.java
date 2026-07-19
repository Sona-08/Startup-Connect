package com.startupconnect.backend.controller;

import com.startupconnect.backend.dto.FundingRecommendationResponse;
import com.startupconnect.backend.service.RecommendationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin(origins = "*")
public class RecommendationController {

    private final RecommendationService service;

    public RecommendationController(RecommendationService service) {
        this.service = service;
    }

    @GetMapping("/{startupId}")
    public List<FundingRecommendationResponse> recommendFunding(
            @PathVariable Long startupId) {

        return service.recommendFunding(startupId);
    }
}
