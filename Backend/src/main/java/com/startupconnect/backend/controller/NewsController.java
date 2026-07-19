package com.startupconnect.backend.controller;

import com.startupconnect.backend.service.NewsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "*")
public class NewsController {

    private final NewsService service;

    public NewsController(NewsService service) {
        this.service = service;
    }

    @GetMapping
    public Map<String, Object> getNews() {
        return service.getStartupNews();
    }
}
