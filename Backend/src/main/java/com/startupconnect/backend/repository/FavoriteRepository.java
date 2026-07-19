package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.Favorite;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByInvestorId(Long investorId);

    @Transactional
    long deleteByInvestorIdAndStartupId(Long investorId, Long startupId);

}
