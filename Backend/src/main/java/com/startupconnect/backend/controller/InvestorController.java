package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.Investor;
import com.startupconnect.backend.service.InvestorService;
import org.springframework.web.bind.annotation.*;
import com.startupconnect.backend.dto.InvestorMatchResponse;
import java.util.List;

@RestController
@RequestMapping("/api/investors")
@CrossOrigin(origins = "*")
public class InvestorController {

    private final InvestorService service;

    public InvestorController(InvestorService service) {
        this.service = service;
    }

    @PostMapping
    public Investor saveInvestor(@RequestBody Investor investor) {
        return service.saveInvestor(investor);
    }

    @GetMapping
    public List<Investor> getAllInvestors() {
        return service.getAllInvestors();
    }

    @GetMapping("/{id}")
    public Investor getInvestorById(@PathVariable Long id) {
        return service.getInvestorById(id);
    }

    @GetMapping("/industry/{industry}")
    public List<Investor> getByIndustry(@PathVariable String industry) {
        return service.getByIndustry(industry);
    }

    @DeleteMapping("/{id}")
    public String deleteInvestor(@PathVariable Long id) {
        service.deleteInvestor(id);
        return "Investor deleted successfully";
    }
    @GetMapping("/match/{startupId}")
    public List<InvestorMatchResponse> matchInvestors(
            @PathVariable Long startupId) {

        return service.matchInvestors(startupId);

    }
}
