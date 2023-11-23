package com.hbomax.repositories;

import com.hbomax.models.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository <Country,Integer> {

    Optional<Country> findById(Integer countryId);
    Optional<Country> findByCountry(String country);
}
