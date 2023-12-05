package com.hbomax.controllers;


import com.hbomax.dto.AddToTitleDTO;
import com.hbomax.dto.CreateMovieDTO;
import com.hbomax.models.CastInfo;
import com.hbomax.models.Person;
import com.hbomax.models.Title;
import com.hbomax.services.CastService;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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



    @PostMapping("/add")
    public CastInfo addPersonToTitle(@RequestBody AddToTitleDTO body){
return castService.addMovieWithPersonAndRole(body.getTitleName(), body.getFirstName(),body.getLastName(),body.getTitleRole(), body.getCharacer());
    }

    @PostMapping("add/character/{firstName}/{lastName}/serie/{titleName}/{characterName}")
    public void addCharacterToSerie(@RequestPart("characterPicture") MultipartFile characterPicture,@PathVariable("firstName") String firstName,@PathVariable("lastName") String lastName,@PathVariable("characterName") String characterName,@PathVariable("titleName") String titleName){
        castService.addCharacterToSerie(titleName,firstName,lastName,characterName,characterPicture);
    }




}
