package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Favorite;
import com.startupconnect.backend.repository.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    private final FavoriteRepository repository;

    public FavoriteServiceImpl(FavoriteRepository repository) {
        this.repository = repository;
    }

    @Override
    public Favorite saveFavorite(Favorite favorite) {
        return repository.save(favorite);
    }

    @Override
    public List<Favorite> getFavorites(Long investorId) {
        return repository.findByInvestorId(investorId);
    }

    @Override
    public void removeFavorite(Long investorId, Long startupId) {

        long deleted = repository.deleteByInvestorIdAndStartupId(investorId, startupId);

        if (deleted == 0) {
            throw new RuntimeException("Favorite not found");
        }
    }
}
