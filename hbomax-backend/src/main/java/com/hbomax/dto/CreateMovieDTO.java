package com.hbomax.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class CreateMovieDTO {

    private String titleName;
    private String firstNameActor;
    private String lastNameActor;
    private String roleName;
    private String character;

    public CreateMovieDTO(String titleName, String firstNameActor, String lastNameActor, String roleName, String character) {
        this.titleName = titleName;
        this.firstNameActor = firstNameActor;
        this.lastNameActor = lastNameActor;
        this.roleName = roleName;
        this.character = character;
    }

    public CreateMovieDTO() {
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }

    public String getFirstNameActor() {
        return firstNameActor;
    }

    public void setFirstNameActor(String firstNameActor) {
        this.firstNameActor = firstNameActor;
    }

    public String getLastNameActor() {
        return lastNameActor;
    }

    public void setLastNameActor(String lastNameActor) {
        this.lastNameActor = lastNameActor;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }
}
