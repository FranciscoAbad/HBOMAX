package com.hbomax.services;

import com.hbomax.exceptions.*;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
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

    private final CompanyRepository companyRepository;

    private final BrandRepository brandRepository;
    @Autowired
    public TitleService(TitleRepository titleRepository, GenreRepository genreRepository, CountryRepository countryRepository, LenguageRepository lenguageRepository, ImageService imageService,CompanyRepository companyRepository,BrandRepository brandRepository) {
        this.titleRepository = titleRepository;
        this.genreRepository = genreRepository;
        this.countryRepository = countryRepository;
        this.lenguageRepository = lenguageRepository;
        this.imageService = imageService;
        this.companyRepository=companyRepository;
        this.brandRepository=brandRepository;
    }

    public Title registerTitle(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate, Float popularity, Integer budget, Integer revenue,String titleType,String rating,String episodeName,String quality  ,MultipartFile banner, MultipartFile poster){

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
            newTitle.setType(titleType);
            newTitle.setRating(rating);
            newTitle.setEpisodeName(episodeName);
            newTitle.setQuality(quality);
           Image bannerPicture =imageService.uploadImage(banner,"banner");
           Image posterPicture =imageService.uploadImage(poster,"poster");
            newTitle.setBannerPicture(bannerPicture);
            newTitle.setPosterPicture(posterPicture);

            return titleRepository.save(newTitle);
        }catch (Exception e){
            throw new UnableToCreateTitleException();
        }

    }

    public Title registerSerie(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate, Float popularity, Integer budget, Integer revenue,String titleType,String rating,String episodeName,String quality ,MultipartFile banner){

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
            newTitle.setType(titleType);
            newTitle.setRating(rating);
            newTitle.setEpisodeName(episodeName);
            newTitle.setQuality(quality);
            Image bannerPicture =imageService.uploadImage(banner,"banner");
            newTitle.setBannerPicture(bannerPicture);

            return titleRepository.save(newTitle);
        }catch (Exception e){
            throw new UnableToCreateTitleException();
        }
    }

    public Title addMovieWithProducerDistributorBrandLenguageCountry(String titleName,Integer season,Integer episode, String producerCompany,String distributorCompany,String brandName,String lenguageName,String countryName,String genreName){
        Title title = titleRepository.findByTitleSeasonAndEpisode(titleName,season,episode).orElseThrow(TitleDoesNotExistException::new);
        Company prodCompany=companyRepository.findByCompanyName(producerCompany).orElseThrow(CompanyDoesNotExistException::new);
        Company distCompany=companyRepository.findByCompanyName(distributorCompany).orElseThrow(CompanyDoesNotExistException::new);
        Brand brand=brandRepository.findByBrandName(brandName).orElseThrow(BrandDoesNotExistException::new);
        Lenguage lenguage=lenguageRepository.findByLenguage(lenguageName).orElseThrow(LenguageDoesNotExistException::new);
        Country country=countryRepository.findByCountry(countryName).orElseThrow(CountryDoesNotExistException::new);
        Genre genre=genreRepository.findByGenre(genreName).orElseThrow(GenreDoesNotExistException::new);


        title.getProductionCompanies().add(prodCompany);
        title.getDistributionCompanies().add(distCompany);
        title.getBrands().add(brand);
        title.getLenguages().add(lenguage);
        title.getCountries().add(country);
        title.getGenres().add(genre);

        return titleRepository.save(title);

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

    public Title addLenguageToTitle(String lenguage,String title) {
        Title auxTitle = titleRepository.findByTitle(title).orElseThrow(TitleDoesNotExistException::new);
        Lenguage auxLenguage = lenguageRepository.findByLenguage(lenguage).orElseThrow(LenguageDoesNotExistException::new);
        auxTitle.getLenguages().add(auxLenguage);

        return titleRepository.save(auxTitle);
    }

    public Title addCompanyToTitleAsProducer(String companyName,String titleName){
        Title auxTitle = titleRepository.findByTitle(titleName).orElseThrow(TitleDoesNotExistException::new);
        Company auxCompany=companyRepository.findByCompanyName(companyName).orElseThrow(CompanyDoesNotExistException::new);

        auxTitle.getProductionCompanies().add(auxCompany);
        return titleRepository.save(auxTitle);
    }

    public Title addCompanyToTitleAsDistributor(String companyName,String titleName){
        Title auxTitle = titleRepository.findByTitle(titleName).orElseThrow(TitleDoesNotExistException::new);
        Company auxCompany=companyRepository.findByCompanyName(companyName).orElseThrow(CompanyDoesNotExistException::new);

        auxTitle.getDistributionCompanies().add(auxCompany);
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

    public Set<Title> getAllTitlesOfProductor(String  companyName){
        return titleRepository.findTitlesByProductor(companyName);
    }

}
