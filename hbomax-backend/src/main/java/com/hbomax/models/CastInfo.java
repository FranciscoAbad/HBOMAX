package com.hbomax.models;

import jakarta.persistence.*;

@Entity
@Table(name="cast_info")
public class CastInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="cast_id")
    private Integer castId;

    @ManyToOne
    @JoinColumn(name = "title_id")
    private Title title;

    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private TitleRole role;

    @Column(name="character")
    private String character;

    public CastInfo() {
    }

    public Integer getCastId() {
        return castId;
    }

    public void setCastId(Integer castId) {
        this.castId = castId;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public TitleRole getRole() {
        return role;
    }

    public void setRole(TitleRole role) {
        this.role = role;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }
}
