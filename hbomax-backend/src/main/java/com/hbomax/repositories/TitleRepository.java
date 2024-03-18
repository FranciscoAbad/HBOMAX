package com.hbomax.repositories;


import com.hbomax.models.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface TitleRepository extends JpaRepository<Title,Integer>  {


    Optional<Title> findByTitle(String title);

    List<Title> findAllByTitle(String title);
    @Query("SELECT t FROM Title t WHERE t.seasonNr = :seasonNr ORDER BY t.views DESC")
    List<Title> findAllBySeasonNrOrderByViewsDesc(@Param("seasonNr") Integer seasonNr);
   @Query("SELECT t from Title t WHERE t.title=:title AND t.seasonNr=:season AND t.episodeNr=:episode")
    Optional<Title> findByTitleSeasonAndEpisode(@Param("title") String title,@Param("season") Integer season,@Param("episode") Integer episode);

   @Query("SELECT t from Title t Where t.title=:title AND t.seasonNr=:season")
   Set<Title> findByTitleSeason(@Param("title") String title,@Param("season") Integer season);

   @Query("SELECT DISTINCT t.seasonNr FROM Title t WHERE t.type = 'episode' AND t.title = :titleName")
   List<Integer> findSeasonsByTitle(@Param("titleName") String titleName);
    @Query("SELECT c.title from CastInfo c WHERE c.person.firstName=:firstName AND c.person.lastName=:lastName")
    Set<Title> findTitlesByPerson(@Param("firstName") String firstName,@Param("lastName") String lastName);

    @Query("SELECT t from Title t JOIN t.genres g WHERE g.genre=:genreName AND t.seasonNr=0")
    Set<Title> findTitlesByGenre(@Param("genreName") String genreName);

    @Query("SELECT t from Title t JOIN t.countries c WHERE c.country=:countryName AND t.seasonNr=0")
    Set<Title> findTitlesByCountry(@Param("countryName") String countryName);

    @Query("SELECT t from Title t JOIN t.lenguages l WHERE l.lenguage=:lenguageName AND t.seasonNr=0")
    Set<Title> findTitlesByLenguage(@Param("lenguageName") String lenguageName);

    @Query("SELECT t from Title t JOIN t.distributionCompanies c WHERE c.companyName=:companyName AND t.seasonNr=0")
    Set<Title> findTitlesByDistributor(@Param("companyName") String companyName);

    @Query("SELECT t from Title t JOIN t.productionCompanies c WHERE c.companyName=:companyName AND t.seasonNr=0")
    Set<Title> findTitlesByProductor(@Param("companyName") String companyName);

    @Query("SELECT t from Title t WHERE t.addedDate BETWEEN :maxDate AND CURRENT_DATE AND t.seasonNr=0")
    Set<Title> findByRecentlyAdded(@Param("maxDate") LocalDate maxDate);

    //TWO PARAMS PRINCIPAL=TYPE

    @Query("SELECT t FROM Title t WHERE t.seasonNr = :seasonNr AND t.type= :type ORDER BY t.views DESC")
    Set<Title> findAllBySeasonNrTypeOrderByViewsDesc(@Param("seasonNr") Integer seasonNr, @Param("type") String type);

    @Query("SELECT t from Title t JOIN t.genres g WHERE g.genre=:genre AND t.seasonNr=0 AND t.type=:type")
    Set<Title> findAllByTypeGenre(@Param("type") String type, @Param("genre") String genre);

    @Query("SELECT t from Title t WHERE t.addedDate BETWEEN :maxDate AND CURRENT_DATE AND t.seasonNr=0 AND t.type= :type")
    List<Title> findByRecentlyAddedAndType(@Param("type") String type, @Param("maxDate") LocalDate maxDate);


    @Query("SELECT t FROM Title t WHERE t.seasonNr = 0 AND t.type= :type ORDER BY t.title ASC")
    List<Title> findAllByTypeAlphabetic(@Param("type") String type);

    //"select * from title t where t.season_nr =0 and t.type ='movie'  order by t.title"

}

