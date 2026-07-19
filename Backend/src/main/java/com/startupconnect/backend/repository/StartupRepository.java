package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.Startup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StartupRepository extends JpaRepository<Startup, Long> {

    List<Startup> findByIndustryContainingIgnoreCase(String industry);

    List<Startup> findByLocationContainingIgnoreCase(String location);

    List<Startup> findByStartupNameContainingIgnoreCase(String startupName);

}
