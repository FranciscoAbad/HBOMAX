package com.hbomax.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="vote")
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "vote_id")
    private Integer voteId;
    @Column(name = "rating")
    private Integer rating;
    @ManyToOne
    @JoinColumn(name = "user_vote", referencedColumnName = "user_id")
    private ApplicationUser userVote;

    @ManyToOne
    @JoinColumn(name = "title", referencedColumnName = "title_id")
    private Title title;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime rateDate;


    public Vote() {
        super();
    }

    public Vote(Integer voteId, Integer rating, ApplicationUser userVote, Title title, LocalDateTime rateDate) {
        this.voteId = voteId;
        this.rating = rating;
        this.userVote = userVote;
        this.title = title;
        this.rateDate = rateDate;
    }

    public Integer getVoteId() {
        return voteId;
    }

    public void setVoteId(Integer voteId) {
        this.voteId = voteId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public ApplicationUser getUserVote() {
        return userVote;
    }

    public void setUserVote(ApplicationUser userVote) {
        this.userVote = userVote;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public LocalDateTime getRateDate() {
        return rateDate;
    }

    public void setRateDate(LocalDateTime rateDate) {
        this.rateDate = rateDate;
    }
}


