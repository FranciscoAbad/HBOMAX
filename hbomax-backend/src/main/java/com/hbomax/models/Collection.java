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

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="card_picture",referencedColumnName = "image_id")
    private Image cardPicture;


    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="banner_picture",referencedColumnName = "image_id")
    private Image bannerPicture;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="name_picture",referencedColumnName = "image_id")
    private Image namePicture;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_collection_junction",
            joinColumns ={@JoinColumn(name = "collection_id")},
            inverseJoinColumns = {@JoinColumn(name="title_id")})
    Set<Genre> collectionTitles;


    public Collection() {
        this.collectionTitles=new HashSet<>();
    }

    public Collection(Set<Genre> collectionTitles, Image namePicture, Image bannerPicture, Image cardPicture, String collectionName, Integer collectionId) {
        this.collectionTitles = collectionTitles;
        this.namePicture = namePicture;
        this.bannerPicture = bannerPicture;
        this.cardPicture = cardPicture;
        this.collectionName = collectionName;
        this.collectionId = collectionId;
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

    public Set<Genre> getCollectionTitles() {
        return collectionTitles;
    }

    public Image getNamePicture() {
        return namePicture;
    }

    public void setNamePicture(Image namePicture) {
        this.namePicture = namePicture;
    }

    public void setCollectionTitles(Set<Genre> collectionTitles) {
        this.collectionTitles = collectionTitles;
    }
}
