package com.hbomax.models;


import jakarta.persistence.*;

@Entity
@Table(name = "lenguage")
public class Lenguage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "lenguage_id")
    private Integer lenguageId;

    @Column(name="lenguage")
    private String lenguage;

    public Lenguage() {
    }

    public Integer getLenguageId() {
        return lenguageId;
    }

    public void setLenguageId(Integer lenguageId) {
        this.lenguageId = lenguageId;
    }

    public String getLenguage() {
        return lenguage;
    }

    public void setLenguage(String lenguage) {
        this.lenguage = lenguage;
    }
}
