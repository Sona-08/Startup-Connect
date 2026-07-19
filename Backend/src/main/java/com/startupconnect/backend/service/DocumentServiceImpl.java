package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Document;
import com.startupconnect.backend.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class DocumentServiceImpl implements DocumentService {

    private final DocumentRepository repository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public DocumentServiceImpl(DocumentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Document uploadDocument(
            Long startupId,
            String documentType,
            MultipartFile file
    ) throws IOException {

        File folder = new File(uploadDir);

        if (!folder.exists()) {
            folder.mkdirs();
        }

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        String filePath = uploadDir + File.separator + fileName;

        File destination = new File(filePath);
        destination.getParentFile().mkdirs();
        file.transferTo(destination);

        Document document = new Document();

        document.setStartupId(startupId);
        document.setDocumentType(documentType);
        document.setFileName(fileName);
        document.setFilePath(filePath);

        return repository.save(document);
    }

    @Override
    public List<Document> getAllDocuments() {
        return repository.findAll();
    }

    @Override
    public Document getDocumentById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Document> getDocumentsByStartup(Long startupId) {
        return repository.findByStartupId(startupId);
    }

    @Override
    public void deleteDocument(Long id) {
        repository.deleteById(id);
    }
}