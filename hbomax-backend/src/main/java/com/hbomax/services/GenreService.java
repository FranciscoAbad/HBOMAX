package com.hbomax.services;

import com.hbomax.models.Genre;
import com.hbomax.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenreService {

    private final GenreRepository genreRepo;
    @Autowired

    public GenreService(GenreRepository genreRepo) {
        this.genreRepo = genreRepo;
    }

    public Genre registerGenre(String name){
        Genre genre=new Genre();
        genre.setGenre(name);
       return genreRepo.save(genre);
    }
}
