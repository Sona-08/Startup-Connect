package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.DashboardResponse;
import com.startupconnect.backend.repository.FundingRequestRepository;
import com.startupconnect.backend.repository.InvestorRepository;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final StartupRepository startupRepository;
    private final InvestorRepository investorRepository;
    private final FundingRequestRepository fundingRepository;

    public DashboardServiceImpl(
            StartupRepository startupRepository,
            InvestorRepository investorRepository,
            FundingRequestRepository fundingRepository) {

        this.startupRepository = startupRepository;
        this.investorRepository = investorRepository;
        this.fundingRepository = fundingRepository;
    }

    @Override
    public DashboardResponse getDashboardData() {

        long totalStartups = startupRepository.count();
        long totalInvestors = investorRepository.count();
        long totalFunding = fundingRepository.count();

        long pending = fundingRepository.findAll()
                .stream()
                .filter(r -> "PENDING".equalsIgnoreCase(r.getStatus()))
                .count();

        long accepted = fundingRepository.findAll()
                .stream()
                .filter(r -> "ACCEPTED".equalsIgnoreCase(r.getStatus()))
                .count();

        long rejected = fundingRepository.findAll()
                .stream()
                .filter(r -> "REJECTED".equalsIgnoreCase(r.getStatus()))
                .count();

        return new DashboardResponse(
                totalStartups,
                totalInvestors,
                totalFunding,
                pending,
                accepted,
                rejected
        );
    }
}
