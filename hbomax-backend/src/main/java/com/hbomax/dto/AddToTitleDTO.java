package com.hbomax.dto;

public class AddToTitleDTO {

    private String firstName;
    private String lastName;
    private String titleRole;
   private String titleName;

    private String characer;

    public AddToTitleDTO(String firstName, String lastName, String titleRole, String titleName, String characer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.titleRole = titleRole;
        this.titleName = titleName;
        this.characer = characer;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTitleRole() {
        return titleRole;
    }

    public void setTitleRole(String titleRole) {
        this.titleRole = titleRole;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }

    public String getCharacer() {
        return characer;
    }

    public void setCharacer(String characer) {
        this.characer = characer;
    }
}
