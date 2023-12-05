package com.hbomax.repositories;


import com.hbomax.models.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface TitleRepository extends JpaRepository<Title,Integer>  {


    Optional<Title> findByTitle(String title);

      List<Title> findAllByTitle(String title);
   @Query("SELECT t from Title t WHERE t.title=:title AND t.seasonNr=:season AND t.episodeNr=:episode")
    Optional<Title> findByTitleSeasonAndEpisode(@Param("title") String title,@Param("season") Integer season,@Param("episode") Integer episode);

    @Query("SELECT c.title from CastInfo c WHERE c.person.firstName=:firstName AND c.person.lastName=:lastName")
    Set<Title> findTitlesByPerson(@Param("firstName") String firstName,@Param("lastName") String lastName);

    @Query("SELECT t from Title t JOIN t.genres g WHERE g.genre=:genreName")
    Set<Title> findTitlesByGenre(@Param("genreName") String genreName);

    @Query("SELECT t from Title t JOIN t.countries c WHERE c.country=:countryName")
    Set<Title> findTitlesByCountry(@Param("countryName") String countryName);

    @Query("SELECT t from Title t JOIN t.lenguages l WHERE l.lenguage=:lenguageName")
    Set<Title> findTitlesByLenguage(@Param("lenguageName") String lenguageName);

    @Query("SELECT t from Title t JOIN t.distributionCompanies c WHERE c.companyName=:companyName")
    Set<Title> findTitlesByDistributor(@Param("companyName") String companyName);

    @Query("SELECT t from Title t JOIN t.productionCompanies c WHERE c.companyName=:companyName")
    Set<Title> findTitlesByProductor(@Param("companyName") String companyName);
}

