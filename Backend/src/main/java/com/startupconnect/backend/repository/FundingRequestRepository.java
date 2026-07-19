package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.FundingRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FundingRequestRepository extends JpaRepository<FundingRequest, Long> {

    List<FundingRequest> findByStartupId(Long startupId);

    List<FundingRequest> findByInvestorId(Long investorId);

}
