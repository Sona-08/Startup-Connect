package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.Favorite;
import com.startupconnect.backend.service.FavoriteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "*")
public class FavoriteController {

    private final FavoriteService service;

    public FavoriteController(FavoriteService service) {
        this.service = service;
    }

    @PostMapping
    public Favorite saveFavorite(@RequestBody Favorite favorite) {
        return service.saveFavorite(favorite);
    }

    @GetMapping("/{investorId}")
    public List<Favorite> getFavorites(@PathVariable Long investorId) {
        return service.getFavorites(investorId);
    }

    @DeleteMapping("/{investorId}/{startupId}")
    public String removeFavorite(
            @PathVariable Long investorId,
            @PathVariable Long startupId) {

        service.removeFavorite(investorId, startupId);
        return "Favorite removed successfully";
    }
}
