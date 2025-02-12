package com.hbomax.models;


import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="collections")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="collection_id")
    private Integer collectionId;

    @Column(name="collection_name")
    private String collectionName;


    @Column(name="collection_description")
    private String collectionDescription;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="card_picture",referencedColumnName = "image_id")
    private Image cardPicture;


    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="banner_picture",referencedColumnName = "image_id")
    private Image bannerPicture;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="name_picture",referencedColumnName = "image_id")
    private Image namePicture;


    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="hero_picture",referencedColumnName = "image_id")
    private Image heroPicture;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_collection_junction",
            joinColumns ={@JoinColumn(name = "collection_id")},
            inverseJoinColumns = {@JoinColumn(name="title_id")})
    Set<Title> collectionTitles;


    public Collection() {
        this.collectionTitles=new HashSet<>();
    }

    public Collection(Integer collectionId, String collectionName, String collectionDescription, Image cardPicture, Image bannerPicture, Image namePicture, Image heroPicture, Set<Title> collectionTitles) {
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

    public String getCollectionDescription() {
        return collectionDescription;
    }

    public void setCollectionDescription(String collectionDescription) {
        this.collectionDescription = collectionDescription;
    }

    public void setCollectionName(String collectionName) {
        this.collectionName = collectionName;
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

    public Set<Title> getCollectionTitles() {
        return collectionTitles;
    }

    public void setCollectionTitles(Set<Title> collectionTitles) {
        this.collectionTitles = collectionTitles;
    }

    public Image getHeroPicture() {
        return heroPicture;
    }

    public void setHeroPicture(Image heroPicture) {
        this.heroPicture = heroPicture;
    }
}
