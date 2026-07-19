package com.startupconnect.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class NewsServiceImpl implements NewsService {

    @Value("${news.api.key}")
    private String apiKey;

    private final WebClient webClient = WebClient.create();

    @Override
    public Map<String, Object> getStartupNews() {

        String url =
                "https://newsapi.org/v2/everything?q=startup OR entrepreneurship OR funding&language=en&sortBy=publishedAt&apiKey="
                        + apiKey;

        return webClient
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }
}
