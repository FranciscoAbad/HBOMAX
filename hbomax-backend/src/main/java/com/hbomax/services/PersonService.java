package com.hbomax.services;


import com.hbomax.exceptions.InvalidNameException;
import com.hbomax.models.Person;
import com.hbomax.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Service
public class PersonService {

    private final PersonRepository personRepo;

    @Autowired

    public PersonService(PersonRepository personRepo) {
        this.personRepo = personRepo;
    }

    public Person registerPerson(String fullName, String birthPlace, String bio, String gender, LocalDate dob) throws InvalidNameException {



        Person person=new Person();
        person.setFullName(fullName);
        person.setBirthplace(birthPlace);
        person.setBio(bio);
        person.setGender(gender);
        person.setDob(dob);

       return personRepo.save(person);
    }

    public Set<Person> getAllFromTitle(String titleName){
        return personRepo.findByTitleName(titleName);
    }

    public Set<Person> getAllFromRoleAndTitle(String titleName,String role){
        return personRepo.findByTitleNameAndRole(titleName,role);
    }


}
