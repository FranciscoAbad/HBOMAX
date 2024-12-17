package com.hbomax.controllers;

import com.google.common.net.HttpHeaders;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Profile;
import com.hbomax.services.ProfileService;
import com.hbomax.services.TokenService;
import com.hbomax.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final TokenService tokenService;
    private final ProfileService profileService;

    @Autowired
    public UserController(UserService userService, TokenService tokenService, ProfileService profileService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.profileService = profileService;
    }




    @GetMapping("/verify")
    public ApplicationUser verifyIdentity(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        String username = tokenService.getUsernameFromToken(token);
        return userService.getUserByUsername(username);
    }

    @PostMapping("/profile/add/{profileName}/{imageId}")
    public Profile addProfileToUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@PathVariable("profileName") String profileName,@PathVariable("imageId") Long imageId){
        String username=tokenService.getUsernameFromToken(token);
        return profileService.createProfile(username,profileName,imageId);
    }

    @GetMapping("/profile")
    public Set<Profile> getProfilesByToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        String username=tokenService.getUsernameFromToken(token);
        return profileService.getAllProfilesByUsername(username);
    }

    @PutMapping("/profile/{profileId}/image/{imageId}/name/{profileName}")
    public Profile setProfilePicture(@PathVariable("profileId") Integer profileId,@PathVariable("imageId") Long imageId,@PathVariable("profileName") String profileName){
        return profileService.setProfilePictureAndName(profileId,imageId,profileName);
    }






}