package com.startupconnect.backend.service;

import com.startupconnect.backend.model.MarketAnalysis;
import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.repository.MarketAnalysisRepository;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

@Service
public class MarketAnalysisServiceImpl implements MarketAnalysisService {

    private final MarketAnalysisRepository analysisRepository;
    private final StartupRepository startupRepository;

    public MarketAnalysisServiceImpl(
            MarketAnalysisRepository analysisRepository,
            StartupRepository startupRepository) {

        this.analysisRepository = analysisRepository;
        this.startupRepository = startupRepository;
    }

    @Override
    public MarketAnalysis analyzeStartup(Long startupId) {

        Startup startup = startupRepository.findById(startupId).orElse(null);

        if (startup == null) {
            return null;
        }

        MarketAnalysis analysis = analysisRepository.findByStartupId(startupId);

        if (analysis == null) {
            analysis = new MarketAnalysis();
        }

        analysis.setStartupId(startupId);

        String industry = startup.getIndustry();

        if ("Technology".equalsIgnoreCase(industry)) {

            analysis.setMarketSize("Large");
            analysis.setCompetitors("Google, Microsoft, Amazon");
            analysis.setTargetAudience("Businesses and Consumers");
            analysis.setSuggestions("Focus on innovation and AI.");
            analysis.setRiskLevel("Medium");
            analysis.setScore(90);

        } else if ("Healthcare".equalsIgnoreCase(industry)) {

            analysis.setMarketSize("Growing");
            analysis.setCompetitors("Apollo, Practo");
            analysis.setTargetAudience("Hospitals and Patients");
            analysis.setSuggestions("Improve accessibility.");
            analysis.setRiskLevel("Low");
            analysis.setScore(85);

        } else {

            analysis.setMarketSize("Moderate");
            analysis.setCompetitors("Local Competitors");
            analysis.setTargetAudience("General Customers");
            analysis.setSuggestions("Strengthen marketing strategy.");
            analysis.setRiskLevel("Medium");
            analysis.setScore(75);
        }

        return analysisRepository.save(analysis);
    }

    @Override
    public MarketAnalysis getAnalysis(Long startupId) {
        return analysisRepository.findByStartupId(startupId);
    }
}