package com.hbomax.dto;

import com.hbomax.models.Brand;
import com.hbomax.models.Genre;
import com.hbomax.models.Image;

import java.time.LocalDate;
import java.util.Set;

public record TitleResponse(
Integer titleId,
 String title,
 String overview,
 Integer seasonNr,
 Integer episodeNr,
 String episodeName,
 String quality,
 Integer runTime,
 LocalDate releaseDate,
 float popularity,
 String rating,
 String type,
 Integer views,
 Integer votes,
 ImageResponse posterPicture,
 ImageResponse bannerPicture,
 ImageResponse namePicture,
 Set<GenreResponse> genres,
 Set<BrandResponse> brands
){}
