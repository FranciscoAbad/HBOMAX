package com.hbomax.dto;

import com.hbomax.models.Image;

public class TitleDTO {

    private Integer titleId;

    private String title;

    private String brandName;

    private Image banner;

    private Image poster;

    public TitleDTO(Integer titleId, String title, String brandName, Image banner, Image poster) {
        this.titleId = titleId;
        this.title = title;
        this.brandName = brandName;
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
