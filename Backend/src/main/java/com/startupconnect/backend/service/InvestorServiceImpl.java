package com.startupconnect.backend.service;

import com.startupconnect.backend.dto.InvestorMatchResponse;
import com.startupconnect.backend.model.Investor;
import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.repository.InvestorRepository;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InvestorServiceImpl implements InvestorService {

    private final InvestorRepository repository;
    private final StartupRepository startupRepository;

    public InvestorServiceImpl(InvestorRepository repository,
                               StartupRepository startupRepository) {
        this.repository = repository;
        this.startupRepository = startupRepository;
    }

    @Override
    public Investor saveInvestor(Investor investor) {
        return repository.save(investor);
    }

    @Override
    public List<Investor> getAllInvestors() {
        return repository.findAll();
    }

    @Override
    public Investor getInvestorById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Investor> getByIndustry(String industry) {
        return repository.findByIndustry(industry);
    }

    @Override
    public void deleteInvestor(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<InvestorMatchResponse> matchInvestors(Long startupId) {

        Startup startup = startupRepository.findById(startupId)
                .orElseThrow();

        List<Investor> investors = repository.findAll();

        List<InvestorMatchResponse> result = new ArrayList<>();

        for (Investor investor : investors) {

            int score = 30;

            if (startup.getIndustry().equalsIgnoreCase(investor.getIndustry())) {
                score += 70;
            }

            result.add(new InvestorMatchResponse(
                    investor.getId(),
                    investor.getInvestorName(),
                    investor.getCompanyName(),
                    investor.getIndustry(),
                    investor.getInvestmentRange(),
                    investor.getPreferredStage(),
                    investor.getLocation(),
                    score
            ));
        }

        result.sort((a, b) -> Integer.compare(b.getMatchScore(), a.getMatchScore()));

        return result;
    }
}