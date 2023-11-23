package com.hbomax.services;

import com.hbomax.exceptions.CountryDoesNotExistException;
import com.hbomax.exceptions.GenreDoesNotExistException;
import com.hbomax.exceptions.TitleDoesNotExistException;
import com.hbomax.models.Country;
import com.hbomax.models.Genre;
import com.hbomax.models.Title;
import com.hbomax.repositories.CountryRepository;
import com.hbomax.repositories.GenreRepository;
import com.hbomax.repositories.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Service

public class TitleService {


    private final TitleRepository titleRepository;
    private final GenreRepository genreRepository;

    private final CountryRepository countryRepository;

    @Autowired

    public TitleService(TitleRepository titleRepository, GenreRepository genreRepository,CountryRepository countryRepository) {
        this.titleRepository = titleRepository;
        this.genreRepository = genreRepository;
        this.countryRepository=countryRepository;
    }





    public Title registerTitle(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate, Float popularity, Integer budget, Integer revenue){

        Title newTitle=new Title();
        newTitle.setTitle(title);
        newTitle.setOverview(overview);
        newTitle.setSeasonNr(seasonNr);
        newTitle.setEpisodeNr(episodeNr);
        newTitle.setRuntime(runtime);
        newTitle.setReleaseDate(releaseDate);
        newTitle.setPopularity(popularity);
        newTitle.setBudget(budget);
        newTitle.setRevenue(revenue);

        return titleRepository.save(newTitle);
    }

    public Title addGenreToTitle(String genre,String title){

        Title auxTitle=titleRepository.findByTitle(title).orElseThrow(TitleDoesNotExistException::new);
        Genre auxGenre=genreRepository.findByGenre(genre).orElseThrow(CountryDoesNotExistException::new);
    auxTitle.getGenres().add(auxGenre);

        return titleRepository.save(auxTitle);
    }

    public Title addCountryToTitle(String country,String title){

        Title auxTitle=titleRepository.findByTitle(title).orElseThrow(TitleDoesNotExistException::new);
        Country auxCountry=countryRepository.findByCountry(country).orElseThrow(GenreDoesNotExistException::new);
        auxTitle.getCountries().add(auxCountry);

        return titleRepository.save(auxTitle);
    }

    public Title retrieveTitle(String titleName){
        return titleRepository.findByTitle(titleName).orElseThrow(TitleDoesNotExistException::new);
    }

    public Title getMovieById(Integer titleId) {
        return titleRepository.findById(titleId).orElseThrow(TitleDoesNotExistException::new);
    }
    public Set<Title> getAllTitlesOfPerson(String firstName,String lastName){
        return titleRepository.findTitlesByPerson(firstName,lastName);
    }

    public Set<Title> getAllTitlesOfGenre(String genreName){
        return titleRepository.findTitlesByGenre(genreName);
    }

    public Set<Title> getAllTitlesOfCountry(String countryName) {
        return titleRepository.findTitlesByCountry(countryName);
    }

}
