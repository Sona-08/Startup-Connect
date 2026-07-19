package com.startupconnect.backend.controller;

import com.startupconnect.backend.model.Notification;
import com.startupconnect.backend.service.NotificationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "*")
public class NotificationController {

    private final NotificationService service;

    public NotificationController(NotificationService service) {
        this.service = service;
    }

    @PostMapping
    public Notification create(@RequestBody Notification notification) {

        return service.createNotification(notification);
    }

    @GetMapping("/{userId}")
    public List<Notification> getNotifications(@PathVariable Long userId) {

        return service.getNotifications(userId);
    }

    @PutMapping("/{id}")
    public Notification markAsRead(@PathVariable Long id) {

        return service.markAsRead(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.deleteNotification(id);

        return "Notification deleted successfully";
    }
}
