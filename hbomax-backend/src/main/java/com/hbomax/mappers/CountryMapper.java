package com.hbomax.mappers;

import com.hbomax.dto.CountryResponse;
import com.hbomax.models.Country;
import org.springframework.stereotype.Service;

@Service
public class CountryMapper {
    public CountryResponse fromCountry(Country country){
        return new CountryResponse(
                country.getCountryId(),
                country.getCountry()
        );
    }
}
