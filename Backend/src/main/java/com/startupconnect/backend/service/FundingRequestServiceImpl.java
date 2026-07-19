package com.startupconnect.backend.service;

import com.startupconnect.backend.model.FundingRequest;
import com.startupconnect.backend.repository.FundingRequestRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FundingRequestServiceImpl implements FundingRequestService {

    private final FundingRequestRepository repository;

    public FundingRequestServiceImpl(FundingRequestRepository repository) {
        this.repository = repository;
    }

    @Override
    public FundingRequest sendRequest(FundingRequest request) {

        request.setStatus("PENDING");
        request.setRequestDate(LocalDate.now());

        return repository.save(request);
    }

    @Override
    public List<FundingRequest> getAllRequests() {
        return repository.findAll();
    }

    @Override
    public List<FundingRequest> getStartupRequests(Long startupId) {
        return repository.findByStartupId(startupId);
    }

    @Override
    public List<FundingRequest> getInvestorRequests(Long investorId) {
        return repository.findByInvestorId(investorId);
    }

    @Override
    public FundingRequest updateStatus(Long id, String status) {

        FundingRequest request =
                repository.findById(id).orElseThrow();

        request.setStatus(status);

        return repository.save(request);
    }

}
