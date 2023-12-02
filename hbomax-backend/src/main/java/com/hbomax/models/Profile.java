package com.hbomax.models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="profile")

public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="profile_id")
    private Integer profileId;

    @Column(name="name")
    private String name;


    @ManyToMany
    @JoinTable(
            name = "profile_title",
            joinColumns = @JoinColumn(name = "profile_id"),
            inverseJoinColumns = @JoinColumn(name = "title_id")
    )
    private Set<Title> titles;

    public Profile() {
        this.titles=new HashSet<>();
    }

    public Integer getProfileId() {
        return profileId;
    }

    public void setProfileId(Integer profileId) {
        this.profileId = profileId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Title> getTitles() {
        return titles;
    }

    public void setTitles(Set<Title> titles) {
        this.titles = titles;
    }



}
