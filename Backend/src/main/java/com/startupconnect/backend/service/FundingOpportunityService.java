package com.startupconnect.backend.service;

import com.startupconnect.backend.model.FundingOpportunity;

import java.util.List;

public interface FundingOpportunityService {

    FundingOpportunity saveOpportunity(FundingOpportunity opportunity);

    List<FundingOpportunity> getAllOpportunities();

    FundingOpportunity getOpportunityById(Long id);

    List<FundingOpportunity> getByIndustry(String industry);

    void deleteOpportunity(Long id);

}
