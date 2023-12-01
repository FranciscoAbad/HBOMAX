package com.hbomax.models;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="title")
public class Title {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "title_id")
    private Integer titleId;

    @Column(name = "title")
    private String title;

    @Column(name = "overview")
    private String overview;

    @Column(name = "season_nr")
    private int seasonNr;

    @Column(name = "episode_nr")
    private int episodeNr;

    @Column(name = "runtime")
    private int runtime;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "popularity")
    private Float popularity;

    @Column(name = "budget")
    private Integer budget;

    @Column(name = "revenue")
    private Integer revenue;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="profile_picture", referencedColumnName="image_id")
    private Image posterPicture;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="banner_picture", referencedColumnName="image_id")
    private Image bannerPicture;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_genre_junction",
    joinColumns ={@JoinColumn(name = "title_id")},
    inverseJoinColumns = {@JoinColumn(name="genre_id")})
    Set<Genre> genres;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_country_junction",
            joinColumns ={@JoinColumn(name = "title_id")},
            inverseJoinColumns = {@JoinColumn(name="country_id")})
    Set<Country> countries;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_lenguage_junction",
            joinColumns ={@JoinColumn(name = "title_id")},
            inverseJoinColumns = {@JoinColumn(name="lenguage_id")})
    Set<Lenguage> lenguages;



    public Title() {
        super();
        this.genres=new HashSet<>();
        this.countries=new HashSet<>();
        this.lenguages=new HashSet<>();
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

    public int getSeasonNr() {
        return seasonNr;
    }

    public void setSeasonNr(int seasonNr) {
        this.seasonNr = seasonNr;
    }

    public int getEpisodeNr() {
        return episodeNr;
    }

    public void setEpisodeNr(int episodeNr) {
        this.episodeNr = episodeNr;
    }

    public int getRuntime() {
        return runtime;
    }

    public void setRuntime(int runtime) {
        this.runtime = runtime;
    }


    public Float getPopularity() {
        return popularity;
    }

    public void setPopularity(Float popularity) {
        this.popularity = popularity;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public Integer getRevenue() {
        return revenue;
    }

    public void setRevenue(Integer revenue) {
        this.revenue = revenue;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Set<Genre> getGenres() {
        return genres;
    }

    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }

    public Set<Country> getCountries() {
        return countries;
    }

    public void setCountries(Set<Country> countries) {
        this.countries = countries;
    }

    public Set<Lenguage> getLenguages() {
        return lenguages;
    }

    public void setLenguages(Set<Lenguage> lenguages) {
        this.lenguages = lenguages;
    }
}
