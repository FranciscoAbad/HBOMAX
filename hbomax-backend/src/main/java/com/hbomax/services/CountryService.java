package com.hbomax.services;


import com.hbomax.models.Country;
import com.hbomax.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private final CountryRepository countryRepo;

    @Autowired

    public CountryService(CountryRepository countryRepo) {
        this.countryRepo = countryRepo;
    }

    public Country registerCountry(String country){
        Country newCountry=new Country();
        newCountry.setCountry(country);
        return countryRepo.save(newCountry);
    }
}
