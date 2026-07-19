package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.Investor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvestorRepository extends JpaRepository<Investor, Long> {

    List<Investor> findByIndustry(String industry);

}
