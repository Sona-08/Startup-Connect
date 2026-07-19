package com.startupconnect.backend.service;

import com.startupconnect.backend.model.MarketAnalysis;

public interface MarketAnalysisService {

    MarketAnalysis analyzeStartup(Long startupId);

    MarketAnalysis getAnalysis(Long startupId);

}