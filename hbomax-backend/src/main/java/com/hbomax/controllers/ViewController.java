package com.hbomax.controllers;

import com.google.common.net.HttpHeaders;
import com.hbomax.exceptions.LenguageDoesNotExistException;
import com.hbomax.exceptions.UserHasAlreadyMadeAView;
import com.hbomax.models.View;
import com.hbomax.services.TokenService;
import com.hbomax.services.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/view")
public class ViewController {

    private final ViewService viewService;

    private final TokenService tokenService;

    @Autowired
    public ViewController(ViewService viewService, TokenService tokenService) {
        this.viewService = viewService;
        this.tokenService = tokenService;
    }


    @ExceptionHandler({UserHasAlreadyMadeAView.class})
    public ResponseEntity<String> handleUserHasAlreadyMakeAView(){
        return new ResponseEntity<String>("The user has already make a view", HttpStatus.CONFLICT);
    }


    @PostMapping("/add/title/{titleId}")
    public View addView(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@PathVariable("titleId") Integer titleId){
        String username=tokenService.getUsernameFromToken(token);
        return viewService.addView(username,titleId);
    }






}
