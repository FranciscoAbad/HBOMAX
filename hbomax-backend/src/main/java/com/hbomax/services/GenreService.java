package com.hbomax.services;

import com.hbomax.dto.GenreResponse;
import com.hbomax.exceptions.UnableToCreateGenreException;
import com.hbomax.exceptions.UnableToCreateTitleException;
import com.hbomax.mappers.GenreMapper;
import com.hbomax.models.Genre;
import com.hbomax.models.Image;
import com.hbomax.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenreService {

    private final GenreRepository genreRepo;
    private final ImageService imageService;
    private final GenreMapper genreMapper;
    @Autowired

    public GenreService(GenreRepository genreRepo,ImageService imageService,GenreMapper genreMapper) {

        this.genreRepo = genreRepo;
        this.imageService=imageService;
        this.genreMapper=genreMapper;
    }

    public GenreResponse registerGenre(String name, MultipartFile file){

        try {
            Genre genre=new Genre();
            genre.setGenre(name);
            Image genreImage=imageService.uploadImage(file,"genre");
            genre.setGenrePicture(genreImage);
            return genreMapper.fromGenre(genreRepo.save(genre));
        } catch(Exception e){
         throw new UnableToCreateGenreException();
        }

    }

    public List<GenreResponse> getAllGenres(){
        return genreRepo.findAll().stream().map(genreMapper::fromGenre).collect(Collectors.toList());
    }
}
