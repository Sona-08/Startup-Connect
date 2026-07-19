package com.startupconnect.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MarketAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long startupId;

    private String marketSize;

    private String competitors;

    private String targetAudience;

    @Column(length = 1000)
    private String suggestions;

    private String riskLevel;

    private Integer score;
}
