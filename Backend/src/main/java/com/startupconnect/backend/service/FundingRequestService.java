package com.startupconnect.backend.service;

import com.startupconnect.backend.model.FundingRequest;

import java.util.List;

public interface FundingRequestService {

    FundingRequest sendRequest(FundingRequest request);

    List<FundingRequest> getAllRequests();

    List<FundingRequest> getStartupRequests(Long startupId);

    List<FundingRequest> getInvestorRequests(Long investorId);

    FundingRequest updateStatus(Long id, String status);

}
