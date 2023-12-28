package com.hbomax.dto;

import com.hbomax.models.Image;
import com.hbomax.models.Person;
import com.hbomax.models.TitleRole;

public class CastInfoDTO {
    private Integer castInfoId;

    private Person person;
    private TitleRole role;

    private Image characterPicture;

    private String characterName;

    private String producerRole;

    private String writerRole;

    public CastInfoDTO(Integer castInfoId, Person person, TitleRole role, Image characterPicture, String characterName, String producerRole, String writerRole) {
        this.castInfoId = castInfoId;
        this.person = person;
        this.role = role;
        this.characterPicture = characterPicture;
        this.characterName = characterName;
        this.producerRole = producerRole;
        this.writerRole = writerRole;
    }

    public Integer getCastInfoId() {
        return castInfoId;
    }

    public void setCastInfoId(Integer castInfoId) {
        this.castInfoId = castInfoId;
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

    public Image getCharacterPicture() {
        return characterPicture;
    }

    public void setCharacterPicture(Image characterPicture) {
        this.characterPicture = characterPicture;
    }

    public String getCharacterName() {
        return characterName;
    }

    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    public String getProducerRole() {
        return producerRole;
    }

    public void setProducerRole(String producerRole) {
        this.producerRole = producerRole;
    }

    public String getWriterRole() {
        return writerRole;
    }

    public void setWriterRole(String writerRole) {
        this.writerRole = writerRole;
    }


}
