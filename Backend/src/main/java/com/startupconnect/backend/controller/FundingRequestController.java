package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.FundingRequest;
import com.startupconnect.backend.service.FundingRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funding")
@CrossOrigin(origins = "*")
public class FundingRequestController {

    private final FundingRequestService service;

    public FundingRequestController(FundingRequestService service) {
        this.service = service;
    }

    @PostMapping
    public FundingRequest sendRequest(@RequestBody FundingRequest request) {

        System.out.println("Startup ID: " + request.getStartupId());
        System.out.println("Investor ID: " + request.getInvestorId());
        System.out.println("Amount: " + request.getAmount());
        System.out.println("Message: " + request.getMessage());

        return service.sendRequest(request);
    }
    @GetMapping
    public List<FundingRequest> getAllRequests() {
        return service.getAllRequests();
    }

    @GetMapping("/startup/{startupId}")
    public List<FundingRequest> getStartupRequests(@PathVariable Long startupId) {
        return service.getStartupRequests(startupId);
    }

    @GetMapping("/investor/{investorId}")
    public List<FundingRequest> getInvestorRequests(@PathVariable Long investorId) {
        return service.getInvestorRequests(investorId);
    }

    @PutMapping("/{id}/{status}")
    public FundingRequest updateStatus(
            @PathVariable Long id,
            @PathVariable String status) {

        return service.updateStatus(id, status);
    }

}
