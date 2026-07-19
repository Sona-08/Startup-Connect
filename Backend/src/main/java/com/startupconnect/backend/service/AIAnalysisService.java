package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.AIAnalysisRequest;
import com.startupconnect.backend.dto.AIAnalysisResponse;

public interface AIAnalysisService {

    AIAnalysisResponse analyzeStartup(AIAnalysisRequest request);

}