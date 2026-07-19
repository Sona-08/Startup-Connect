package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Document;
import com.startupconnect.backend.model.ReadinessScore;
import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.repository.DocumentRepository;
import com.startupconnect.backend.repository.ReadinessScoreRepository;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReadinessScoreServiceImpl implements ReadinessScoreService {

    private final StartupRepository startupRepository;
    private final DocumentRepository documentRepository;
    private final ReadinessScoreRepository repository;

    public ReadinessScoreServiceImpl(
            StartupRepository startupRepository,
            DocumentRepository documentRepository,
            ReadinessScoreRepository repository) {

        this.startupRepository = startupRepository;
        this.documentRepository = documentRepository;
        this.repository = repository;
    }

    @Override
    public ReadinessScore calculateScore(Long startupId) {

        Startup startup = startupRepository.findById(startupId).orElse(null);

        if (startup == null) {
            return null;
        }

        int score = 0;

        if (startup.getStartupName() != null && !startup.getStartupName().isEmpty())
            score += 20;

        if (startup.getDescription() != null && !startup.getDescription().isEmpty())
            score += 20;

        if (startup.getWebsite() != null && !startup.getWebsite().isEmpty())
            score += 20;

        if (startup.getFundingRequired() != null)
            score += 20;

        List<Document> documents =
                documentRepository.findByStartupId(startupId);

        if (!documents.isEmpty())
            score += 20;

        String status;

        if (score >= 80)
            status = "Excellent";
        else if (score >= 60)
            status = "Good";
        else if (score >= 40)
            status = "Average";
        else
            status = "Needs Improvement";

        ReadinessScore readiness = repository.findByStartupId(startupId);

        if (readiness == null)
            readiness = new ReadinessScore();

        readiness.setStartupId(startupId);
        readiness.setScore(score);
        readiness.setStatus(status);

        return repository.save(readiness);
    }

    @Override
    public ReadinessScore getScore(Long startupId) {
        return repository.findByStartupId(startupId);
    }
}