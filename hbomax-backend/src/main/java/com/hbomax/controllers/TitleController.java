package com.hbomax.controllers;


import com.google.common.net.HttpHeaders;
import com.hbomax.dto.CreateMovieDTO;
import com.hbomax.dto.SingleTitleDTO;
import com.hbomax.dto.TitleDTO;
import com.hbomax.exceptions.*;
import com.hbomax.models.Brand;
import com.hbomax.models.Country;
import com.hbomax.models.Title;
import com.hbomax.services.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/title")
public class TitleController {

    private final TitleService titleService;
    @Autowired
    public TitleController(TitleService titleService) {
        this.titleService = titleService;
    }

    @ExceptionHandler({TitleDoesNotExistException.class})
    public  ResponseEntity<String> handleTitleDoesNotExist(){
        return new ResponseEntity<String>("The title you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({GenreDoesNotExistException.class})
    public  ResponseEntity<String> handleGenreDoesNotExist(){
        return new ResponseEntity<String>("The genre you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({BrandDoesNotExistException.class})
    public  ResponseEntity<String> handleBrandDoesNotExist(){
        return new ResponseEntity<String>("The brand you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({CompanyDoesNotExistException.class})
    public  ResponseEntity<String> handleCompanyDoesNotExist(){
        return new ResponseEntity<String>("The company you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({CountryDoesNotExistException.class})
    public  ResponseEntity<String> handleCountryDoesNotExist(){
        return new ResponseEntity<String>("The country you're looking for does not exist", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({LenguageDoesNotExistException.class})
    public  ResponseEntity<String> handleLenguageDoesNotExist(){
        return new ResponseEntity<String>("The lenguage you're looking for does not exist", HttpStatus.NOT_FOUND);
    }


    @PostMapping(value="/create",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public Title createNewTitle(@RequestPart("json") CreateMovieDTO createMovie, @RequestPart("posterPicture") MultipartFile posterPicture, @RequestPart("bannerPicture") MultipartFile bannerPicture,@RequestPart("namePicture") MultipartFile namePicture){

        titleService.registerTitle(createMovie.getTitleName(),createMovie.getOverview(),createMovie.getSeason(),createMovie.getEpisode(),createMovie.getRunTime(),createMovie.getReleaseDate(),createMovie.getAddedDate(),1.2F,0 ,0,createMovie.getTitleType(),createMovie.getRating(),createMovie.getEpisodeName(),createMovie.getQuality(),bannerPicture,posterPicture,namePicture);
        return titleService.addMovieWithProducerDistributorBrandLenguageCountry(createMovie.getTitleName(),createMovie.getSeason(),createMovie.getEpisode(),createMovie.getProducer(),createMovie.getDistributor(),createMovie.getBrand(),createMovie.getLenguage(),createMovie.getCountry(),createMovie.getGenre());
    }

    @PostMapping(value="/create/tvshow",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public Title createNewSerie(@RequestPart("json") CreateMovieDTO createMovie, @RequestPart("bannerPicture") MultipartFile bannerPicture){
        LocalDate date=LocalDate.now();
        titleService.registerSerie(createMovie.getTitleName(),createMovie.getOverview(),createMovie.getSeason(),createMovie.getEpisode(),createMovie.getRunTime(),createMovie.getReleaseDate(),createMovie.getAddedDate(),1.2F,0 ,0,createMovie.getTitleType(),createMovie.getRating(),createMovie.getEpisodeName(),createMovie.getQuality(),bannerPicture);
        return titleService.addMovieWithProducerDistributorBrandLenguageCountry(createMovie.getTitleName(),createMovie.getSeason(),createMovie.getEpisode(),createMovie.getProducer(),createMovie.getDistributor(),createMovie.getBrand(),createMovie.getLenguage(),createMovie.getCountry(),createMovie.getGenre());
    }

    @PostMapping("/{title}/addGenre/{genre}")
    public Title addGenreToTitle(@PathVariable String title, @PathVariable String genre) {
        return  titleService.addGenreToTitle(genre,title);
    }

    @PostMapping("{title}/addCountry/{country}")
    public Title addCountryToTitle(@PathVariable String title,@PathVariable String country){
        return titleService.addCountryToTitle(country,title);
    }

    @PostMapping("{title}/addLenguage/{lenguage}")
    public Title addLenguageToTitle(@PathVariable String title,@PathVariable String lenguage){
        return titleService.addLenguageToTitle(lenguage,title);
    }


    @PostMapping("{title}/addProducer/{company}")
    public Title addProductorCompanyToTitle(@PathVariable String title,@PathVariable String company){
        return titleService.addCompanyToTitleAsProducer(company,title);
    }

    @PostMapping("/name/{titleName}")
    public Title retrieveTitle(@PathVariable String titleName){
        return titleService.retrieveTitle(titleName);
    }

    @GetMapping("/id/{titleId}")
    public ResponseEntity<SingleTitleDTO> getMovieById(@PathVariable Integer titleId) {
        SingleTitleDTO title = titleService.getMovieById(titleId);
        return ResponseEntity.ok(title);
    }

    @GetMapping("/all/person/{firstName}/{lastName}")
    public Set<TitleDTO> getAllFromPerson(@PathVariable String firstName, @PathVariable String lastName){
        return titleService.getAllTitlesOfPerson(firstName,lastName);
    }

    @GetMapping("/all/genre/{genreName}")
    public Set<TitleDTO> getAllFromGenre(@PathVariable String genreName){

       return titleService.getAllTitlesOfGenre(genreName);
    }

    @GetMapping("/all/country/{countryName}")
    public Set<TitleDTO> getAllFromCountry(@PathVariable String countryName){
        return titleService.getAllTitlesOfCountry(countryName);
    }
    @GetMapping("/all/lenguage/{lenguageName}")
    public Set<TitleDTO> getAllFromLenguage(@PathVariable String lenguageName){
        return titleService.getAllTitlesOfLenguage(lenguageName);
    }

    @GetMapping("/all/producer/{producerName}")
    public Set<TitleDTO> getAllFromProducer(@PathVariable String producerName){
        return titleService.getAllTitlesOfProductor(producerName);
    }

    @GetMapping("/all/recently/added")
    public Set<TitleDTO> getAllFromProducer(){
        return titleService.getTiltesRecentlyAdded();
    }

    @GetMapping("/all/title/{titleName}/season/{seasonNumber}")
    public Set<TitleDTO> getAllFromTitleAndSeason(@PathVariable("titleName") String titleName,@PathVariable("seasonNumber") int seasonNumber){
        return titleService.getTitlesByTitleAndSeason(titleName,seasonNumber);
    }

    @GetMapping("/all/title/trending")
    public List<TitleDTO> getAllTrending(){
        return titleService.getMostPopularTitles();
    }

    @GetMapping("title/{titleName}/seasons")
    public Integer countSeasons(@PathVariable("titleName") String titleName){
        return titleService.countSeries(titleName);
    }

    //FILTERS BY TWO PARAMS STARTING WITH TYPE (MOVIE/TV-SHOW)

    @GetMapping("title/type/{type}/trending")
    public Set<TitleDTO> getAllByTypeAndTrending(@PathVariable("type") String type){
        return titleService.getAllTitlesByTypeAndPopularity(type);
    }

    @GetMapping("title/type/{type}/genre/{genre}")
    public Set<TitleDTO> getAllByTypeAndGenre(@PathVariable("type") String type,@PathVariable("genre") String genre){
        return titleService.getAllTitlesByTypeAndGenre(type,genre);
    }

    @GetMapping("title/type/{type}/just-added")
    public List<TitleDTO> getAllByTypeAndGenre(@PathVariable("type") String type){
        return titleService.getAllTitlesByTypeAndRecentlyAdded(type);
    }

    @GetMapping("title/type/{type}/alphabetic")
    public List<TitleDTO> getAllByTypeAndAlphabetic(@PathVariable("type") String type){
        return titleService.getAllTitlesByTypeAndAlphabetic(type);
    }

    //FILTERS BY TWO PARAMS STARTING WITH GENRE

    @GetMapping("title/genre/{genre}/trending")
    public Set<TitleDTO> getAllByGenreAndTrending(@PathVariable("genre") String genre){
        return titleService.getAllTitlesByGenreAndPopularity(genre);
    }


    @GetMapping("title/genre/{genre}/just-added")
    public List<TitleDTO> getAllByGenreAndJustadded(@PathVariable("genre") String genre){
        return titleService.getAllTitlesByGenreAndRecentlyAdded(genre);
    }


    @GetMapping("title/genre/{genre}/alphabetic")
    public List<TitleDTO> getAllByGenreAndAlphabetic(@PathVariable("genre") String genre){
        return titleService.getAllTitlesByGenreAndAlphabetic(genre);
    }


    @GetMapping("/search/{param}")
    public List<TitleDTO> searchTitles( @PathVariable("param") String param){


        return titleService.getAllTitlesByOneParam(param);
    }





}
