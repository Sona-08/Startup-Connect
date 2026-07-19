package com.startupconnect.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "funding_opportunities")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingOpportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String industry;

    private String fundingAmount;

    private String eligibility;

    private String deadline;

    @Column(length = 1000)
    private String description;
}