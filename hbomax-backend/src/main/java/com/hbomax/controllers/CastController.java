package com.hbomax.controllers;


import com.hbomax.dto.AddToTitleDTO;
import com.hbomax.dto.CreateMovieDTO;
import com.hbomax.exceptions.*;
import com.hbomax.models.CastInfo;
import com.hbomax.models.Image;
import com.hbomax.models.Person;
import com.hbomax.models.Title;
import com.hbomax.services.CastService;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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


    @ExceptionHandler({TitleDoesNotExistException.class})
    public  ResponseEntity<String> handleTitleDoesNotExist(){
        return new ResponseEntity<String>("The title you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({PersonDoesNotExistException.class})
    public  ResponseEntity<String> handlePersonDoesNotExist(){
        return new ResponseEntity<String>("The person you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({RoleDoesNotExistException.class})
    public  ResponseEntity<String> handleRoleDoesNotExist(){
        return new ResponseEntity<String>("The role you're looking for does not exist", HttpStatus.NOT_FOUND);
    }




    @PostMapping("add/character/{firstName}/{lastName}/serie/{titleName}/{characterName}")
    public void addCharacterToSerie(@RequestPart("characterPicture") MultipartFile characterPicture,@PathVariable("firstName") String firstName,@PathVariable("lastName") String lastName,@PathVariable("characterName") String characterName,@PathVariable("titleName") String titleName){
        castService.addCharacterToSerie(titleName,firstName,lastName,characterName,characterPicture);
    }


    @GetMapping("/get/images/brand/{brandName}")
    public Set<Image> getAllCharacterImagesByBrandName(@PathVariable("brandName") String brandName){
        return castService.getAllCharacterPicturesByBrand(brandName);
    }



}
