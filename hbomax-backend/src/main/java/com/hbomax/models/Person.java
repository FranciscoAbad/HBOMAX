package com.hbomax.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="person_id")
    private Integer personId;

    @Column(name="full_name")
    private String fullName;

    @Column(name="gender")
    private String gender;

    @Column(name="dob")
    private LocalDate dob;

    @Column(name="birthplace")
    private String birthplace;

    @Column(name="bio")
    private String bio;



    public Person(){
        super();

    }

    public Person(Integer personId, String fullName, String gender, LocalDate dob, String birthplace, String bio) {
        this.personId = personId;
        this.fullName = fullName;
        this.gender = gender;
        this.dob = dob;
        this.birthplace = birthplace;
        this.bio = bio;
    }

    public Integer getPersonId() {
        return personId;
    }

    public void setPersonId(Integer personId) {
        this.personId = personId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}
