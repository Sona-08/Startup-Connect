package com.startupconnect.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class AIAnalysisResponse {

    private int score;

    private List<String> strengths;

    private List<String> weaknesses;

    private String marketPotential;

    private String fundingReadiness;

    private List<String> recommendedInvestors;

    private List<String> recommendations;
}