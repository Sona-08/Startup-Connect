package com.startupconnect.backend.dto;

import lombok.Data;

@Data
public class AIAnalysisRequest {

    private String startupName;

    private String description;

    private String industry;

    private Double fundingRequired;

    private Integer teamSize;

    private Integer yearFounded;

    private String location;

    private String website;
}