package com.startupconnect.backend.service;

import com.startupconnect.backend.model.FundingOpportunity;
import com.startupconnect.backend.repository.FundingOpportunityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundingOpportunityServiceImpl implements FundingOpportunityService {

    private final FundingOpportunityRepository repository;

    public FundingOpportunityServiceImpl(FundingOpportunityRepository repository) {
        this.repository = repository;
    }

    @Override
    public FundingOpportunity saveOpportunity(FundingOpportunity opportunity) {
        return repository.save(opportunity);
    }

    @Override
    public List<FundingOpportunity> getAllOpportunities() {
        return repository.findAll();
    }

    @Override
    public FundingOpportunity getOpportunityById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funding Opportunity not found"));
    }

    @Override
    public List<FundingOpportunity> getByIndustry(String industry) {
        return repository.findByIndustry(industry);
    }

    @Override
    public void deleteOpportunity(Long id) {
        repository.deleteById(id);
    }
}
