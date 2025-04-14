package com.hbomax.dto;

import com.hbomax.models.Image;

import java.time.LocalDate;

public record TitlePreview(
        Integer titleId,
        String title,
        String brandName,
        String type,
        Integer episodeNr,
        String episodeName,
        Integer runtime,
        String rating,
        String overview,
        LocalDate releaseDate,
        Image banner,
        Image poster,
        Image name
) {
}
