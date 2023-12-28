package com.hbomax.dto;

import com.hbomax.models.Image;

public class TitleDTO {

    private Integer titleId;

    private String title;

    private String brandName;

    private String type;

    private Integer episodeNr;

    private String episodeName;

    private Integer runtime;

    private String rating;

    private Image banner;

    private Image poster;

    public TitleDTO(Integer titleId, String title, String brandName, String type, Integer episodeNr, String episodeName, Integer runtime, String rating, Image banner, Image poster) {
        this.titleId = titleId;
        this.title = title;
        this.brandName = brandName;
        this.type = type;
        this.episodeNr = episodeNr;
        this.episodeName = episodeName;
        this.runtime = runtime;
        this.rating = rating;
        this.banner = banner;
        this.poster = poster;
    }

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

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public Integer getRuntime() {
        return runtime;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public Image getBanner() {
        return banner;
    }

    public void setBanner(Image banner) {
        this.banner = banner;
    }

    public Image getPoster() {
        return poster;
    }

    public void setPoster(Image poster) {
        this.poster = poster;
    }
}
