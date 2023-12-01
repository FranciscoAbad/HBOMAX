package com.hbomax.services;

import com.hbomax.exceptions.*;
import com.hbomax.models.*;
import com.hbomax.repositories.CountryRepository;
import com.hbomax.repositories.GenreRepository;
import com.hbomax.repositories.LenguageRepository;
import com.hbomax.repositories.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Service

public class TitleService {


    private final TitleRepository titleRepository;
    private final GenreRepository genreRepository;

    private final CountryRepository countryRepository;

    private final LenguageRepository lenguageRepository;

    private final ImageService imageService;
    @Autowired
    public TitleService(TitleRepository titleRepository, GenreRepository genreRepository, CountryRepository countryRepository, LenguageRepository lenguageRepository, ImageService imageService) {
        this.titleRepository = titleRepository;
        this.genreRepository = genreRepository;
        this.countryRepository = countryRepository;
        this.lenguageRepository = lenguageRepository;
        this.imageService = imageService;
    }










    public Title registerTitle(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate, Float popularity, Integer budget, Integer revenue, MultipartFile banner, MultipartFile poster){

        try {
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
           Image bannerPicture =imageService.uploadImage(banner,"banner");
           Image posterPicture =imageService.uploadImage(poster,"poster");
            newTitle.setBannerPicture(bannerPicture);
            newTitle.setPosterPicture(posterPicture);

            return titleRepository.save(newTitle);
        }catch (Exception e){
            throw new UnableToCreateTitleException();
        }




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

    public Title addLenguageToTitle(String lenguage,String title){
        Title auxTitle=titleRepository.findByTitle(title).orElseThrow(TitleDoesNotExistException::new);
        Lenguage auxLenguage=lenguageRepository.findByLenguage(lenguage).orElseThrow(LenguageDoesNotExistException::new);
        auxTitle.getLenguages().add(auxLenguage);

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

    public Set<Title> getAllTitlesOfLenguage(String lenguageName){
        return titleRepository.findTitlesByLenguage(lenguageName);
    }

}
