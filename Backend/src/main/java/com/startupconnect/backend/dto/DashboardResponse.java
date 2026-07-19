package com.startupconnect.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardResponse {

    private long totalStartups;
    private long totalInvestors;
    private long totalFundingRequests;
    private long pendingRequests;
    private long acceptedRequests;
    private long rejectedRequests;
}
