package com.startupconnect.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="funding_applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingApplication {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private Long startupId;

    private Long fundingOpportunityId;

    private String status;

    @Column(length=1000)
    private String proposal;
}
