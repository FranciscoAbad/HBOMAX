package com.hbomax.controllers;

import com.google.common.net.HttpHeaders;
import com.hbomax.models.ApplicationUser;
import com.hbomax.services.TokenService;
import com.hbomax.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    private final UserService userService;
    private final TokenService tokenService;


    @Autowired
    public UserController(UserService userService, TokenService tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;

    }

    @GetMapping("/verify")
    public ApplicationUser verifyIdentity(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        String username = tokenService.getUsernameFromToken(token);
        return userService.getUserByUsername(username);
    }



}