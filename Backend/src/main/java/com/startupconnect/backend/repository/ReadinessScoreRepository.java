package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.ReadinessScore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReadinessScoreRepository
        extends JpaRepository<ReadinessScore, Long> {

    ReadinessScore findByStartupId(Long startupId);

}