package com.startupconnect.backend.dto;

import lombok.Data;

@Data
public class NewsArticle {

    private String title;

    private String description;

    private String url;

    private String urlToImage;

    private String publishedAt;
}
