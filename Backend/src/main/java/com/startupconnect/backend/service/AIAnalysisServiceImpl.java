package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.AIAnalysisRequest;
import com.startupconnect.backend.dto.AIAnalysisResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AIAnalysisServiceImpl implements AIAnalysisService {

    @Override
    public AIAnalysisResponse analyzeStartup(AIAnalysisRequest request) {

        AIAnalysisResponse response = new AIAnalysisResponse();

        int score = 50;

        // Team size analysis
        if (request.getTeamSize() != null && request.getTeamSize() >= 5) {
            score += 10;
        }

        // Funding requirement analysis
        if (request.getFundingRequired() != null &&
                request.getFundingRequired() <= 5000000) {
            score += 10;
        }

        // Startup age analysis
        if (request.getYearFounded() != null) {
            int age = LocalDate.now().getYear() - request.getYearFounded();
            if (age <= 5) {
                score += 10;
            }
        }

        // Industry analysis
        if (request.getIndustry() != null) {
            String industry = request.getIndustry().toLowerCase();

            if (industry.contains("ai")
                    || industry.contains("health")
                    || industry.contains("fintech")) {
                score += 20;
            }
        }

        response.setScore(Math.min(score, 100));

        List<String> strengths = new ArrayList<>();
        strengths.add("Clear startup vision");
        strengths.add("Scalable business model");

        List<String> weaknesses = new ArrayList<>();
        weaknesses.add("Needs customer validation");
        weaknesses.add("Limited market data");

        List<String> investors = new ArrayList<>();
        investors.add("Sequoia Capital");
        investors.add("Accel");
        investors.add("Y Combinator");

        List<String> recommendations = new ArrayList<>();
        recommendations.add("Build a working MVP");
        recommendations.add("Validate with early customers");
        recommendations.add("Prepare a strong financial projection");

        response.setStrengths(strengths);
        response.setWeaknesses(weaknesses);
        response.setMarketPotential("High");
        response.setFundingReadiness("Medium");
        response.setRecommendedInvestors(investors);
        response.setRecommendations(recommendations);

        return response;
    }
}