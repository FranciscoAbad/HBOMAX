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

    @Column(name="episode_name")
    private String episodeName;

    @Column(name="quality")
    private String quality;

    @Column(name = "runtime")
    private Integer runtime;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "added_date")
    private LocalDate addedDate;

    @Column(name = "popularity")
    private Float popularity;

    @Column(name = "budget")
    private Integer budget;

    @Column(name = "revenue")
    private Integer revenue;

    @Column(name="rating")
    private String rating;

    @Column(name="type")
    private String type;

    @Column(name="views")
    private Integer views;

    @Column(name="votes")
    private Integer votes;

    @Column(name="totalScore")
    private Float totalScore;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="profile_picture", referencedColumnName="image_id")
    private Image posterPicture;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="banner_picture", referencedColumnName="image_id")
    private Image bannerPicture;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="name_picture",referencedColumnName = "image_id")
    private Image namePicture;


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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="production",
            joinColumns = {@JoinColumn(name="title_id")},
            inverseJoinColumns = {@JoinColumn(name="company_id")}
    )
    Set<Company> productionCompanies;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="distribution",
            joinColumns = {@JoinColumn(name="title_id")},
            inverseJoinColumns = {@JoinColumn(name="company_id")}
    )
    Set<Company> distributionCompanies;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="title_brand_junction",
            joinColumns = {@JoinColumn(name="title_id")},
            inverseJoinColumns = {@JoinColumn(name="brand_id")}
    )
    Set<Brand> brands;



    public Title() {
        super();
        this.genres=new HashSet<>();
        this.countries=new HashSet<>();
        this.lenguages=new HashSet<>();
        this.productionCompanies=new HashSet<>();
        this.distributionCompanies=new HashSet<>();
        this.brands=new HashSet<>();
        this.totalScore=0F;
    }

    public LocalDate getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
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

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public Float getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Float totalScore) {
        this.totalScore = totalScore;
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

    public Set<Company> getProductionCompanies() {
        return productionCompanies;
    }

    public void setProductionCompanies(Set<Company> productionCompanies) {
        this.productionCompanies = productionCompanies;
    }

    public Set<Company> getDistributionCompanies() {
        return distributionCompanies;
    }

    public void setDistributionCompanies(Set<Company> distributionCompanies) {
        this.distributionCompanies = distributionCompanies;
    }

    public Set<Brand> getBrands() {
        return brands;
    }

    public void setBrands(Set<Brand> brands) {
        this.brands = brands;
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
    public Image getNamePicture() {
        return namePicture;
    }
    public void setNamePicture(Image namePicture) {
        this.namePicture = namePicture;
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

    @Override
    public String toString() {
        return "Title{" +
                "titleId=" + titleId +
                ", title='" + title + '\'' +
                '}';
    }
}
