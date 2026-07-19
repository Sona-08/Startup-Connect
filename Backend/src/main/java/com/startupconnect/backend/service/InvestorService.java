package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.InvestorMatchResponse;
import com.startupconnect.backend.model.Investor;
import java.util.List;

public interface InvestorService {

    Investor saveInvestor(Investor investor);

    List<Investor> getAllInvestors();

    Investor getInvestorById(Long id);

    List<Investor> getByIndustry(String industry);

    void deleteInvestor(Long id);
    List<InvestorMatchResponse> matchInvestors(Long startupId);
}
