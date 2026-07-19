package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.FundingRecommendationResponse;

import java.util.List;

public interface RecommendationService {

    List<FundingRecommendationResponse> recommendFunding(Long startupId);

}