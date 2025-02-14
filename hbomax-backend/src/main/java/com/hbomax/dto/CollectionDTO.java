package com.hbomax.dto;

import com.hbomax.models.Image;
import com.hbomax.models.Title;
import jakarta.persistence.*;

import java.util.Set;

public class CollectionDTO {

    private Integer collectionId;

    private String collectionName;

    private String collectionDescription;

    private Image cardPicture;

    private Image bannerPicture;

    private Image namePicture;

    private Image heroPicture;

    Set<TitleDTO> collectionTitles;

    public CollectionDTO(Integer collectionId, String collectionName, String collectionDescription, Image cardPicture, Image bannerPicture, Image namePicture, Image heroPicture, Set<TitleDTO> collectionTitles) {
        this.collectionId = collectionId;
        this.collectionName = collectionName;
        this.collectionDescription = collectionDescription;
        this.cardPicture = cardPicture;
        this.bannerPicture = bannerPicture;
        this.namePicture = namePicture;
        this.heroPicture = heroPicture;
        this.collectionTitles = collectionTitles;
    }

    public Integer getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(Integer collectionId) {
        this.collectionId = collectionId;
    }

    public String getCollectionName() {
        return collectionName;
    }

    public void setCollectionName(String collectionName) {
        this.collectionName = collectionName;
    }

    public String getCollectionDescription() {
        return collectionDescription;
    }

    public void setCollectionDescription(String collectionDescription) {
        this.collectionDescription = collectionDescription;
    }

    public Image getCardPicture() {
        return cardPicture;
    }

    public void setCardPicture(Image cardPicture) {
        this.cardPicture = cardPicture;
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

    public Image getHeroPicture() {
        return heroPicture;
    }

    public void setHeroPicture(Image heroPicture) {
        this.heroPicture = heroPicture;
    }

    public Set<TitleDTO> getCollectionTitles() {
        return collectionTitles;
    }

    public void setCollectionTitles(Set<TitleDTO> collectionTitles) {
        this.collectionTitles = collectionTitles;
    }
}
