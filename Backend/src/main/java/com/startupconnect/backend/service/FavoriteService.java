package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Favorite;

import java.util.List;

public interface FavoriteService {

    Favorite saveFavorite(Favorite favorite);

    List<Favorite> getFavorites(Long investorId);

    void removeFavorite(Long investorId, Long startupId);

}
