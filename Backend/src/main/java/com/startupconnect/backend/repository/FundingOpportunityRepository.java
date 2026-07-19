package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.FundingOpportunity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FundingOpportunityRepository extends JpaRepository<FundingOpportunity, Long> {

    List<FundingOpportunity> findByIndustry(String industry);

}
