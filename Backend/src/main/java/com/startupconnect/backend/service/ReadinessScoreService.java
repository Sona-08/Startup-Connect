package com.startupconnect.backend.service;

import com.startupconnect.backend.model.ReadinessScore;

public interface ReadinessScoreService {

    ReadinessScore calculateScore(Long startupId);

    ReadinessScore getScore(Long startupId);

}