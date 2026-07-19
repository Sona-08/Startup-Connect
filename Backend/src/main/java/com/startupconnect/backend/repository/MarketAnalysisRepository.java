package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.MarketAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketAnalysisRepository
        extends JpaRepository<MarketAnalysis, Long> {

    MarketAnalysis findByStartupId(Long startupId);

}