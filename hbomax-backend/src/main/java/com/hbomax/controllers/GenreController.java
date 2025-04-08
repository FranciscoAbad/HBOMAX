package com.hbomax.controllers;


import com.hbomax.dto.GenreResponse;
import com.hbomax.models.Genre;
import com.hbomax.services.GenreService;
import com.hbomax.services.ImageService;
import org.aspectj.weaver.patterns.Pointcut;
import org.aspectj.weaver.patterns.ThisOrTargetPointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@RestController
@RequestMapping("/genre")
public class GenreController {

    private final GenreService genreService;

    @Autowired
    public GenreController(GenreService genreService) {
        this.genreService = genreService;

    }

    @PostMapping("/add/{genreName}")
    public GenreResponse createGenre(@RequestPart("genrePicture") MultipartFile genrePicture, @PathVariable("genreName") String genreName){
        return genreService.registerGenre(genreName,genrePicture);
    }

    @GetMapping("/all")
    public List<GenreResponse> getAllGenres(){
        return genreService.getAllGenres();
    }
}
