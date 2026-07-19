package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Notification;
import com.startupconnect.backend.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository repository;

    public NotificationServiceImpl(NotificationRepository repository) {
        this.repository = repository;
    }

    @Override
    public Notification createNotification(Notification notification) {

        notification.setRead(false);

        return repository.save(notification);
    }

    @Override
    public List<Notification> getNotifications(Long userId) {

        return repository.findByUserId(userId);
    }

    @Override
    public Notification markAsRead(Long id) {

        Notification notification = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        notification.setRead(true);

        return repository.save(notification);
    }

    @Override
    public void deleteNotification(Long id) {

        repository.deleteById(id);
    }
}