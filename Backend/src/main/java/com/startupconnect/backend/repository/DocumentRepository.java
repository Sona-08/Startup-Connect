package com.startupconnect.backend.repository;

import com.startupconnect.backend.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {

    List<Document> findByStartupId(Long startupId);

}