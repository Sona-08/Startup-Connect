package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.FundingRecommendationResponse;
import com.startupconnect.backend.model.FundingOpportunity;
import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.repository.FundingOpportunityRepository;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationServiceImpl implements RecommendationService {

    private final StartupRepository startupRepository;
    private final FundingOpportunityRepository fundingRepository;

    public RecommendationServiceImpl(
            StartupRepository startupRepository,
            FundingOpportunityRepository fundingRepository) {

        this.startupRepository = startupRepository;
        this.fundingRepository = fundingRepository;
    }

    @Override
    public List<FundingRecommendationResponse> recommendFunding(Long startupId) {

        Startup startup = startupRepository.findById(startupId)
                .orElseThrow(() -> new RuntimeException("Startup not found"));

        List<FundingOpportunity> opportunities = fundingRepository.findAll();

        List<FundingRecommendationResponse> recommendations = new ArrayList<>();

        for (FundingOpportunity opportunity : opportunities) {

            int score = 30;

            if (startup.getIndustry() != null &&
                    startup.getIndustry().equalsIgnoreCase(opportunity.getIndustry())) {
                score = 100;
            }

            recommendations.add(
                    new FundingRecommendationResponse(
                            opportunity.getId(),
                            opportunity.getTitle(),
                            opportunity.getIndustry(),
                            opportunity.getFundingAmount(),
                            score
                    )
            );
        }

        recommendations.sort(
                (a, b) -> Integer.compare(b.getMatchScore(), a.getMatchScore())
        );

        return recommendations;
    }
}