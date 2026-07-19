package com.startupconnect.backend.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String startupName;
    private String description;
    private String industry;
    private Double fundingRequired;
    private Integer teamSize;
    private Integer yearFounded;
    private String website;
    private String location;
    private String logoUrl;
}
