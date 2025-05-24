package com.hbomax.dto;

import com.hbomax.models.Image;

public record GenreResponse(
        int id,
        String genre,
        Image genrePicture
) {
}
