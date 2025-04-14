package com.hbomax.controllers;


import com.hbomax.dto.CastInfoResponse;
import com.hbomax.exceptions.PersonDoesNotExistException;
import com.hbomax.exceptions.RoleDoesNotExistException;
import com.hbomax.exceptions.TitleDoesNotExistException;
import com.hbomax.models.Image;
import com.hbomax.services.CastService;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

@RestController
@RequestMapping("/cast")
public class CastController {

    private final CastService castService;

    private final TitleService titleService;


    @Autowired

    public CastController(CastService castService, TitleService titleService) {
        this.castService = castService;
        this.titleService = titleService;
    }


    @ExceptionHandler({TitleDoesNotExistException.class})
    public ResponseEntity<String> handleTitleDoesNotExist() {
        return new ResponseEntity<String>("The title you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({PersonDoesNotExistException.class})
    public ResponseEntity<String> handlePersonDoesNotExist() {
        return new ResponseEntity<String>("The person you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({RoleDoesNotExistException.class})
    public ResponseEntity<String> handleRoleDoesNotExist() {
        return new ResponseEntity<String>("The role you're looking for does not exist", HttpStatus.NOT_FOUND);
    }


    @PostMapping("add/character/picture/{firstName}/{lastName}/serie/{titleName}/{characterName}")
    public void addCharacterToSerieWithPicture(@RequestPart("characterPicture") MultipartFile characterPicture, @PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName, @PathVariable("characterName") String characterName, @PathVariable("titleName") String titleName) {
        castService.addCharacterToSerieWithPicture(titleName, firstName, lastName, characterName, characterPicture);
    }

    @PostMapping("add/character/{fullName}/serie/{titleName}/{characterName}")
    public void addCharacterToSerie(@PathVariable("fullName") String fullName, @PathVariable("characterName") String characterName, @PathVariable("titleName") String titleName) {
        castService.addCharacterToSerie(titleName, fullName, characterName);
    }

    @PostMapping("add/producer/{fullName}/serie/{titleName}")
    public void addProducerToSerie(@PathVariable("fullName") String fullName, @PathVariable("titleName") String titleName) {
        castService.addProducerToSerie(titleName, fullName);
    }

    @PostMapping("add/writer/{fullName}/serie/{titleName}")
    public void addWriterToSerie(@PathVariable("fullName") String fullName, @PathVariable("titleName") String titleName) {
        castService.addWriterToSerie(titleName, fullName);
    }

    @PostMapping("add/director/{fullName}/serie/{titleName}")
    public void addDirectorToSerie(@PathVariable("fullName") String fullName, @PathVariable("titleName") String titleName) {
        castService.addDirectorToSerie(titleName, fullName);
    }

    @GetMapping("/get/images/brand/{brandName}")
    public Set<Image> getAllCharacterImagesByBrandName(@PathVariable("brandName") String brandName) {
        return castService.getAllCharacterPicturesByBrand(brandName);
    }

    @GetMapping("/get/all/{titleName}/{seasonNr}/{episodeNr}")
    public Set<CastInfoResponse> getAllCastByTitleSeasonAndEpisode(@PathVariable("titleName") String titleName, @PathVariable("seasonNr") Integer seasonNr, @PathVariable("episodeNr") Integer episodeNr) {
        return castService.getAllCastInfoOfTitleSeasonAndEpisode(titleName, seasonNr, episodeNr);
    }


}
