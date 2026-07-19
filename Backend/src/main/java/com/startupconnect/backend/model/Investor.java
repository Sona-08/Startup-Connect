package com.startupconnect.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "investors")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Investor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String investorName;

    private String companyName;

    private String email;

    private String industry;

    private String investmentRange;

    private String preferredStage;

    private String location;

    @Column(length = 1000)
    private String bio;
}
