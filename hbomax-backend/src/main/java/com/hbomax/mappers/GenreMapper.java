package com.hbomax.mappers;

import com.hbomax.dto.GenreResponse;
import com.hbomax.models.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenreMapper {
    private final ImageMapper imageMapper;

    @Autowired
    public GenreMapper(ImageMapper imageMapper) {
        this.imageMapper = imageMapper;
    }

    public GenreResponse fromGenre(Genre genre){
        return new GenreResponse(
                genre.getId(),
                genre.getGenre(),
                genre.getGenrePicture() != null
                        ? genre.getGenrePicture()
                        : null
        );
    }
}
