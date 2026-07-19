package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Startup;

import java.util.List;

public interface StartupService {

    Startup saveStartup(Startup startup);

    List<Startup> getAllStartups();

    Startup getStartupById(Long id);

    List<Startup> searchByIndustry(String industry);

    List<Startup> searchByLocation(String location);

    List<Startup> searchByName(String startupName);

}

