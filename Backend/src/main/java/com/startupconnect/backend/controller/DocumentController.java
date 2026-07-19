package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.Document;
import com.startupconnect.backend.service.DocumentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "*")
public class DocumentController {

    private final DocumentService service;

    public DocumentController(DocumentService service) {
        this.service = service;
    }

    @PostMapping("/upload")
    public Document uploadDocument(
            @RequestParam Long startupId,
            @RequestParam String documentType,
            @RequestParam MultipartFile file
    ) throws IOException {

        return service.uploadDocument(
                startupId,
                documentType,
                file
        );
    }

    @GetMapping
    public List<Document> getAllDocuments() {
        return service.getAllDocuments();
    }

    @GetMapping("/{id}")
    public Document getDocumentById(@PathVariable Long id) {
        return service.getDocumentById(id);
    }

    @GetMapping("/startup/{startupId}")
    public List<Document> getDocumentsByStartup(@PathVariable Long startupId) {
        return service.getDocumentsByStartup(startupId);
    }

    @DeleteMapping("/{id}")
    public String deleteDocument(@PathVariable Long id) {
        service.deleteDocument(id);
        return "Document deleted successfully.";
    }
}