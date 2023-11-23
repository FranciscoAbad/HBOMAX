package com.hbomax.services;

import com.hbomax.exceptions.PersonDoesNotExistException;
import com.hbomax.exceptions.RoleDoesNotExistException;
import com.hbomax.exceptions.TitleDoesNotExistException;
import com.hbomax.models.CastInfo;
import com.hbomax.models.Person;
import com.hbomax.models.Title;
import com.hbomax.models.TitleRole;
import com.hbomax.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CastService {
    private final TitleRepository titleRepo;
    private final PersonRepository personRepo;
    private final TitleRoleRepository roleRepo;
    private final CastInfoRepository castInfoRepo;


    @Autowired

    public CastService(TitleRepository titleRepo, PersonRepository personRepo, TitleRoleRepository roleRepo, CastInfoRepository castInfoRepo) {
        this.titleRepo = titleRepo;
        this.personRepo = personRepo;
        this.roleRepo = roleRepo;
        this.castInfoRepo = castInfoRepo;
    }

    public CastInfo addMovieWithPersonAndRole(String titleName, String firstName, String lastName, String roleName,String character) {
        Title title = titleRepo.findByTitle(titleName).orElseThrow(TitleDoesNotExistException::new);
        Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
        TitleRole role = roleRepo.findByRole(roleName).orElseThrow(RoleDoesNotExistException::new);

        CastInfo castInfo = new CastInfo();
        castInfo.setTitle(title);
        castInfo.setPerson(person);
        castInfo.setRole(role);
        castInfo.setCharacter(character);


        return castInfoRepo.save(castInfo);

    }

    public void addPersonToTitle(String firstName, String lastName, String titleName){
        Title title=titleRepo.findByTitle(titleName).orElseThrow(TitleDoesNotExistException::new);
        Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
    }




}
