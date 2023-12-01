package com.hbomax.services;

import com.hbomax.models.Lenguage;
import com.hbomax.repositories.LenguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LenguageService {

    private final LenguageRepository lenguageRepo;

    @Autowired

    public LenguageService(LenguageRepository lenguageRepo) {
        this.lenguageRepo = lenguageRepo;
    }

    public Lenguage registerLenguage(String lenguage){
        Lenguage newLenguage=new Lenguage();
        newLenguage.setLenguage(lenguage);
       return lenguageRepo.save(newLenguage);
    }


}
