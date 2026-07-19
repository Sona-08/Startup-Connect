package com.startupconnect.backend.service;

import com.startupconnect.backend.model.Notification;

import java.util.List;

public interface NotificationService {

    Notification createNotification(Notification notification);

    List<Notification> getNotifications(Long userId);

    Notification markAsRead(Long id);

    void deleteNotification(Long id);
}
