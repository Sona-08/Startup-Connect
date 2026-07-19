package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Document;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface DocumentService {

    Document uploadDocument(
            Long startupId,
            String documentType,
            MultipartFile file
    ) throws IOException;

    List<Document> getAllDocuments();

    Document getDocumentById(Long id);

    List<Document> getDocumentsByStartup(Long startupId);

    void deleteDocument(Long id);
}