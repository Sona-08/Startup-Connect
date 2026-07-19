package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.FundingOpportunity;
import com.startupconnect.backend.service.FundingOpportunityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funding-opportunities")
@CrossOrigin(origins = "*")
public class FundingOpportunityController {

    private final FundingOpportunityService service;

    public FundingOpportunityController(FundingOpportunityService service) {
        this.service = service;
    }

    @PostMapping
    public FundingOpportunity create(@RequestBody FundingOpportunity opportunity) {
        return service.saveOpportunity(opportunity);
    }

    @GetMapping
    public List<FundingOpportunity> getAll() {
        return service.getAllOpportunities();
    }

    @GetMapping("/{id}")
    public FundingOpportunity getById(@PathVariable Long id) {
        return service.getOpportunityById(id);
    }

    @GetMapping("/industry/{industry}")
    public List<FundingOpportunity> getByIndustry(@PathVariable String industry) {
        return service.getByIndustry(industry);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteOpportunity(id);
        return "Funding Opportunity deleted successfully";
    }
}