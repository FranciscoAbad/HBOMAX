package com.hbomax.repositories;


import com.hbomax.models.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

public interface TitleRepository extends JpaRepository<Title,Integer>  {


    Optional<Title> findByTitle(String title);

    @Query("SELECT c.title from CastInfo c WHERE c.person.firstName=:firstName AND c.person.lastName=:lastName")
    Set<Title> findTitlesByPerson(@Param("firstName") String firstName,@Param("lastName") String lastName);

    @Query("SELECT t from Title t JOIN t.genres g WHERE g.genre=:genreName")
    Set<Title> findTitlesByGenre(@Param("genreName") String genreName);

    @Query("SELECT t from Title t JOIN t.countries c WHERE c.country=:countryName")
    Set<Title> findTitlesByCountry(@Param("countryName") String countryName);
}

