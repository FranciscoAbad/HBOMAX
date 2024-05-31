package com.hbomax.services;

import com.hbomax.exceptions.UnableToCreateGenreException;
import com.hbomax.exceptions.UnableToCreateTitleException;
import com.hbomax.models.Genre;
import com.hbomax.models.Image;
import com.hbomax.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class GenreService {

    private final GenreRepository genreRepo;
    private final ImageService imageService;
    @Autowired

    public GenreService(GenreRepository genreRepo,ImageService imageService) {

        this.genreRepo = genreRepo;
        this.imageService=imageService;
    }

    public Genre registerGenre(String name, MultipartFile file){

        try {
            Genre genre=new Genre();
            genre.setGenre(name);
            Image genreImage=imageService.uploadImage(file,"genre");
            genre.setGenrePicture(genreImage);
            return genreRepo.save(genre);
        } catch(Exception e){
         throw new UnableToCreateGenreException();
        }

    }

    public List<Genre> getAllGenres(){
        return genreRepo.findAll();
    }
}
