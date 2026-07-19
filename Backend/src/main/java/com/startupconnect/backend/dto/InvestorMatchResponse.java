package com.startupconnect.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class InvestorMatchResponse {

    private Long investorId;

    private String investorName;

    private String companyName;

    private String industry;

    private String investmentRange;

    private String preferredStage;

    private String location;

    private int matchScore;
}

