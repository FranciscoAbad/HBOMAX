package com.hbomax.services;


import com.hbomax.dto.CountryResponse;
import com.hbomax.mappers.CountryMapper;
import com.hbomax.models.Country;
import com.hbomax.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private final CountryRepository countryRepo;
    private final CountryMapper countryMapper;

    @Autowired
    public CountryService(CountryRepository countryRepo, CountryMapper countryMapper) {
        this.countryRepo = countryRepo;
        this.countryMapper = countryMapper;
    }

    public CountryResponse registerCountry(String country){
        Country newCountry=new Country();
        newCountry.setCountry(country);
        return countryMapper.fromCountry(countryRepo.save(newCountry));
    }
}
