package com.startupconnect.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "funding_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long startupId;

    private Long investorId;

    private Double amount;

    @Column(length = 1000)
    private String message;

    private String status;

    private LocalDate requestDate;
}
