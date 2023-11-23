package com.hbomax.controllers;


import com.hbomax.models.Country;
import com.hbomax.models.Title;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Set;

@RestController
@RequestMapping("/title")
@CrossOrigin("*")
public class TitleController {

    private final TitleService titleService;
    @Autowired
    public TitleController(TitleService titleService) {
        this.titleService = titleService;
    }

    @PostMapping("/{title}/addGenre/{genre}")
    public Title addGenreToTitle(
            @PathVariable String title,
            @PathVariable String genre) {

        return  titleService.addGenreToTitle(genre,title);
    }

    @PostMapping("{title}/addCountry/{country}")
    public Title addCountryToTitle(@PathVariable String title,@PathVariable String country){
        return titleService.addCountryToTitle(country,title);
    }

    @PostMapping("/name/{titleName}")
    public Title retrieveTitle(@PathVariable String titleName){


        return titleService.retrieveTitle(titleName);
    }

    @GetMapping("/id/{titleId}")
    public ResponseEntity<Title> getMovieById(@PathVariable Integer titleId) {
        Title title = titleService.getMovieById(titleId);
        return ResponseEntity.ok(title);
    }



    @GetMapping("/all/person/{firstName}/{lastName}")
    public Set<Title> getAllFromPerson(@PathVariable String firstName, @PathVariable String lastName){

        return titleService.getAllTitlesOfPerson(firstName,lastName);

    }

    @GetMapping("/all/genre/{genreName}")
    public Set<Title> getAllFromGenre(@PathVariable String genreName){
        return titleService.getAllTitlesOfGenre(genreName);
    }

    @GetMapping("/all/country/{countryName}")
    public Set<Title> getAllFromCountry(@PathVariable String countryName){
        return titleService.getAllTitlesOfCountry(countryName);
    }

}
