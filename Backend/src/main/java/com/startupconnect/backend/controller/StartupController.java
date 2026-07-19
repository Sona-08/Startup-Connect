package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.service.StartupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/startups")
@CrossOrigin(origins = "*")
public class StartupController {

    private final StartupService service;

    public StartupController(StartupService service) {
        this.service = service;
    }

    @PostMapping
    public Startup createStartup(@RequestBody Startup startup) {
        return service.saveStartup(startup);
    }

    @GetMapping
    public List<Startup> getAll() {
        return service.getAllStartups();
    }

    @GetMapping("/{id}")
    public Startup getById(@PathVariable Long id) {
        return service.getStartupById(id);
    }

    @GetMapping("/industry/{industry}")
    public List<Startup> searchIndustry(@PathVariable String industry) {
        return service.searchByIndustry(industry);
    }

    @GetMapping("/location/{location}")
    public List<Startup> searchLocation(@PathVariable String location) {
        return service.searchByLocation(location);
    }

    @GetMapping("/name/{name}")
    public List<Startup> searchName(@PathVariable String name) {
        return service.searchByName(name);
    }

}
