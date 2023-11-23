package com.hbomax.controllers;


import com.hbomax.dto.AddToTitleDTO;
import com.hbomax.dto.CreateMovieDTO;
import com.hbomax.models.CastInfo;
import com.hbomax.models.Person;
import com.hbomax.models.Title;
import com.hbomax.services.CastService;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/cast")
@CrossOrigin("*")
public class CastController {

    private final CastService castService;

    private final TitleService titleService;

    @Autowired

    public CastController(CastService castService, TitleService titleService) {
        this.castService = castService;
        this.titleService = titleService;
    }

    @PostMapping("/create")
    public CastInfo createNewTitle(@RequestBody CreateMovieDTO createMovie){
    LocalDate date=LocalDate.now();
        titleService.registerTitle(createMovie.getTitleName(), "",1,1,120,date,1.2F,120000,120000);

   return castService.addMovieWithPersonAndRole(createMovie.getTitleName(), createMovie.getFirstNameActor(), createMovie.getLastNameActor(), createMovie.getRoleName(), createMovie.getCharacter());

    }

    @PostMapping("/add")
    public CastInfo addPersonToTitle(@RequestBody AddToTitleDTO body){
return castService.addMovieWithPersonAndRole(body.getTitleName(), body.getFirstName(),body.getLastName(),body.getTitleRole(), body.getCharacer());
    }




}