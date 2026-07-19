package com.startupconnect.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FundingRecommendationResponse {

    private Long opportunityId;
    private String title;
    private String industry;
    private String fundingAmount;
    private int matchScore;
}
