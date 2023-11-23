package com.hbomax.models;

import jakarta.persistence.*;
import org.checkerframework.checker.signature.qual.Identifier;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "country_id")

    private Integer countryId;

    @Column(name = "country")
    private String country;

    public Country() {
    }

    public Integer getCountryId() {
        return countryId;
    }

    public void setCountryId(Integer countryId) {
        this.countryId = countryId;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
