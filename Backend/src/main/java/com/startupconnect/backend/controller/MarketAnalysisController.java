package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.MarketAnalysis;
import com.startupconnect.backend.service.MarketAnalysisService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analysis")
@CrossOrigin(origins = "*")
public class MarketAnalysisController {

    private final MarketAnalysisService service;

    public MarketAnalysisController(MarketAnalysisService service) {
        this.service = service;
    }

    @PostMapping("/{startupId}")
    public MarketAnalysis analyzeStartup(@PathVariable Long startupId) {
        return service.analyzeStartup(startupId);
    }

    @GetMapping("/{startupId}")
    public MarketAnalysis getAnalysis(@PathVariable Long startupId) {
        return service.getAnalysis(startupId);
    }
}