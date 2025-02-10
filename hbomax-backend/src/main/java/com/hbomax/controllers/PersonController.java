package com.hbomax.controllers;


import com.hbomax.dto.CreatePersonDTO;
import com.hbomax.exceptions.InvalidNameException;
import com.hbomax.exceptions.UnableToResolvePhotoException;
import com.hbomax.exceptions.UnabledToSavePhotoException;
import com.hbomax.models.Person;
import com.hbomax.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
@RestController
@RequestMapping("/person")
public class PersonController {

    private final PersonService personService;
@Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }


    @ExceptionHandler({InvalidNameException.class})
    ResponseEntity<String> handleInvalidNameException(){
        return new ResponseEntity<String>("The name you've provided is invalid", HttpStatus.NOT_ACCEPTABLE);
    }

    @PostMapping("/add")
    public Person createPerson(@RequestBody CreatePersonDTO body) throws InvalidNameException{
    return personService.registerPerson(body.getFullName(), body.getBirthplace(), body.getBio(), body.getGender(), body.getDob());
    }

    @GetMapping("/all/{titleName}")
    public Set<Person> getAllPersonsFromTitle(@PathVariable String titleName){
        return personService.getAllFromTitle(titleName);
    }

    @GetMapping("/all/{titleName}/{role}")
    public Set<Person> getAllActorsFromTitle(@PathVariable String titleName,@PathVariable String role){
    return personService.getAllFromRoleAndTitle(titleName,role);
    }

}
