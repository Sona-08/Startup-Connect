package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Startup;
import com.startupconnect.backend.repository.StartupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartupServiceImpl implements StartupService {

    private final StartupRepository repository;

    public StartupServiceImpl(StartupRepository repository) {
        this.repository = repository;
    }

    @Override
    public Startup saveStartup(Startup startup) {
        return repository.save(startup);
    }

    @Override
    public List<Startup> getAllStartups() {
        return repository.findAll();
    }

    @Override
    public Startup getStartupById(Long id) {
        return repository.findById(id).orElse(null);
    }
    @Override
    public List<Startup> searchByIndustry(String industry) {

        return repository.findByIndustryContainingIgnoreCase(industry);

    }

    @Override
    public List<Startup> searchByLocation(String location) {

        return repository.findByLocationContainingIgnoreCase(location);

    }

    @Override
    public List<Startup> searchByName(String startupName) {

        return repository.findByStartupNameContainingIgnoreCase(startupName);

    }
}
