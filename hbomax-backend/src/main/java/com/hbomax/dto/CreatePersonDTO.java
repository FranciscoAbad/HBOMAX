package com.hbomax.dto;

import java.time.LocalDate;

public class CreatePersonDTO {

    private String fullName;
    private String gender;
    private LocalDate dob;
    private String birthplace;
    private String bio;

    public CreatePersonDTO(String fullName, String gender, LocalDate dob, String birthplace, String bio) {
        this.fullName = fullName;
        this.gender = gender;
        this.dob = dob;
        this.birthplace = birthplace;
        this.bio = bio;
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
