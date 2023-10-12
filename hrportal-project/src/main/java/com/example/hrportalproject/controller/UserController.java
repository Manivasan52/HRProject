package com.example.hrportalproject.controller;

import com.example.hrportalproject.model.User;
import com.example.hrportalproject.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3003/")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepo;
    @PostMapping("/login")
    public ResponseEntity<String> register(@RequestBody Map<String, String> registrationData) {
        String username = registrationData.get("username");
        String password = registrationData.get("password");

        // Check if the username is already taken
        User existingUser = userRepo.findByUsername(username).orElse(null);
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // Additional validation (e.g., password complexity) can be added here
        if (!isValidPassword(password)) {
            return ResponseEntity.badRequest().body("Invalid password. Please choose a stronger password.");
        }

        // Create a new user
        User user = new User();
        user.setUsername(username);
        user.setPassword(password); // Encode the password

        userRepo.save(user);

        return ResponseEntity.ok("Registration successful");
    }

    private boolean isValidPassword(String password) {
        // Add your password complexity rules here
        // For example, you can check password length, special characters, etc.
        return password.length() <= 8; // Simple example: Password must be at least 8 characters long
    }

    @GetMapping("/getData")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepo.findAll();
        return ResponseEntity.ok(users);
    }
    @GetMapping("/getData/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        Optional<User> userOptional = userRepo.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

