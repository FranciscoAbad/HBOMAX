package com.hbomax.dto;

import com.hbomax.models.Brand;
import com.hbomax.models.Genre;
import com.hbomax.models.Image;

import java.time.LocalDate;
import java.util.Set;

public class SingleTitleDTO {
private Integer titleId;
private String title;

private String overview;

private Integer seasonNr;
private Integer episodeNr;
private String episodeName;
private String quality;

private Integer runTime;

private LocalDate releaseDate;

private float popularity;

private String rating;

private String type;


    private Integer views;

    private Integer votes;

private Image posterPicture;

private Image bannerPicture;

private Image namePicture;

private Set<Genre> genres;

private Set<Brand> brands;


    public Integer getTitleId() {
        return titleId;
    }

    public void setTitleId(Integer titleId) {
        this.titleId = titleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public Integer getSeasonNr() {
        return seasonNr;
    }

    public void setSeasonNr(Integer seasonNr) {
        this.seasonNr = seasonNr;
    }

    public Integer getEpisodeNr() {
        return episodeNr;
    }

    public void setEpisodeNr(Integer episodeNr) {
        this.episodeNr = episodeNr;
    }

    public String getEpisodeName() {
        return episodeName;
    }

    public void setEpisodeName(String episodeName) {
        this.episodeName = episodeName;
    }

    public String getQuality() {
        return quality;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }

    public Integer getRunTime() {
        return runTime;
    }

    public void setRunTime(Integer runTime) {
        this.runTime = runTime;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public float getPopularity() {
        return popularity;
    }

    public void setPopularity(float popularity) {
        this.popularity = popularity;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    public Image getPosterPicture() {
        return posterPicture;
    }

    public void setPosterPicture(Image posterPicture) {
        this.posterPicture = posterPicture;
    }

    public Image getBannerPicture() {
        return bannerPicture;
    }

    public void setBannerPicture(Image bannerPicture) {
        this.bannerPicture = bannerPicture;
    }

    public Image getNamePicture() {
        return namePicture;
    }

    public void setNamePicture(Image namePicture) {
        this.namePicture = namePicture;
    }

    public Set<Genre> getGenres() {
        return genres;
    }

    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }

    public Set<Brand> getBrands() {
        return brands;
    }

    public void setBrands(Set<Brand> brands) {
        this.brands = brands;
    }

    public SingleTitleDTO(Integer titleId, String title, String overview, Integer seasonNr, Integer episodeNr, String episodeName, String quality, Integer runTime, LocalDate releaseDate, float popularity, String rating, String type, Integer views, Integer votes, Image posterPicture, Image bannerPicture, Image namePicture, Set<Genre> genres, Set<Brand> brands) {
        this.titleId = titleId;
        this.title = title;
        this.overview = overview;
        this.seasonNr = seasonNr;
        this.episodeNr = episodeNr;
        this.episodeName = episodeName;
        this.quality = quality;
        this.runTime = runTime;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
        this.rating = rating;
        this.type = type;
        this.views = views;
        this.votes = votes;
        this.posterPicture = posterPicture;
        this.bannerPicture = bannerPicture;
        this.namePicture = namePicture;
        this.genres = genres;
        this.brands = brands;
    }
}
