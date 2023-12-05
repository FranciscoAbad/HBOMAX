package com.hbomax.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class CreateMovieDTO {

    private String titleName;
    private String titleType;
    private Integer season;
    private Integer episode;
    private int runTime;
    private String rating;
    private String overview;

    private String episodeName;

    private String quality;
    private String producer;
    private String distributor;
    private String brand;
    private String lenguage;
    private String country;
    private String genre;


    public CreateMovieDTO(String titleName, String titleType, Integer season, Integer episode, int runTime, String rating, String overview, String episodeName, String quality, String producer, String distributor, String brand, String lenguage, String country, String genre) {
        this.titleName = titleName;
        this.titleType = titleType;
        this.season = season;
        this.episode = episode;
        this.runTime = runTime;
        this.rating = rating;
        this.overview = overview;
        this.episodeName = episodeName;
        this.quality = quality;
        this.producer = producer;
        this.distributor = distributor;
        this.brand = brand;
        this.lenguage = lenguage;
        this.country = country;
        this.genre = genre;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }

    public String getTitleType() {
        return titleType;
    }

    public void setTitleType(String titleType) {
        this.titleType = titleType;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public Integer getEpisode() {
        return episode;
    }

    public void setEpisode(Integer episode) {
        this.episode = episode;
    }

    public int getRunTime() {
        return runTime;
    }

    public void setRunTime(int runTime) {
        this.runTime = runTime;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
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

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getDistributor() {
        return distributor;
    }

    public void setDistributor(String distributor) {
        this.distributor = distributor;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLenguage() {
        return lenguage;
    }

    public void setLenguage(String lenguage) {
        this.lenguage = lenguage;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
