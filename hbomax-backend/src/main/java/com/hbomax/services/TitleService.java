package com.hbomax.services;

import com.hbomax.dto.SingleTitleDTO;
import com.hbomax.dto.TitleDTO;
import com.hbomax.exceptions.*;
import com.hbomax.mappers.TitleDTOMapper;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    public Title registerTitle(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate,LocalDate addedDate, Float popularity, Integer budget, Integer revenue,String titleType,String rating,String episodeName,String quality  ,MultipartFile banner, MultipartFile poster,MultipartFile name){

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
            newTitle.setAddedDate(addedDate);
            newTitle.setViews(0);
            newTitle.setVotes(0);
            Image bannerPicture =imageService.uploadImage(banner,"banner");
            Image posterPicture =imageService.uploadImage(poster,"poster");
            Image namePicture=imageService.uploadImage(name,"name");
            newTitle.setBannerPicture(bannerPicture);
            newTitle.setPosterPicture(posterPicture);
            newTitle.setNamePicture(namePicture);

            return titleRepository.save(newTitle);
        }catch (Exception e){
            throw new UnableToCreateTitleException();
        }

    }

    public Title registerSerie(String title, String overview, int seasonNr, int episodeNr, int runtime, LocalDate releaseDate,LocalDate addedDate, Float popularity, Integer budget, Integer revenue,String titleType,String rating,String episodeName,String quality ,MultipartFile banner){

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
            newTitle.setAddedDate(addedDate);
            newTitle.setViews(0);
            newTitle.setVotes(0);
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

    public SingleTitleDTO getMovieById(Integer titleId) {
        Title title=titleRepository.findById(titleId).orElseThrow(TitleDoesNotExistException::new);
        SingleTitleDTO single=new SingleTitleDTO(title.getTitleId(),title.getTitle(),title.getOverview(),title.getSeasonNr(),title.getEpisodeNr(),title.getEpisodeName(),title.getQuality(),title.getRuntime(),title.getReleaseDate(),title.getPopularity(),title.getRating(),title.getType(),title.getViews(),title.getVotes(),title.getPosterPicture(),title.getBannerPicture(),title.getNamePicture(),title.getGenres(),title.getBrands());
        return single;
    }
    public Set<TitleDTO>  getAllTitlesOfPerson(String firstName,String lastName){
        Set<Title> titles=titleRepository.findTitlesByPerson(firstName,lastName);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO> getAllTitlesOfGenre(String genreName){
        Set<Title> titles= titleRepository.findTitlesByGenre(genreName);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO>  getAllTitlesOfCountry(String countryName) {
        Set<Title> titles=titleRepository.findTitlesByCountry(countryName);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO> getAllTitlesOfLenguage(String lenguageName){
        Set<Title> titles=titleRepository.findTitlesByLenguage(lenguageName);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO> getAllTitlesOfProductor(String  companyName){
        Set<Title> titles=titleRepository.findTitlesByProductor(companyName);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO> getTiltesRecentlyAdded(){
        LocalDate currentDate=LocalDate.now();
        currentDate=currentDate.minusMonths(1);
        Set<Title> titles=titleRepository.findByRecentlyAdded(currentDate);
            return TitleDTOMapper.mapToDTOSet(titles);
    }

    public Set<TitleDTO> getTitlesByTitleAndSeason(String title,Integer season){
        Set<Title> titles=titleRepository.findByTitleSeason(title,season);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public List<TitleDTO> getMostPopularTitles(){
       List<Title> titles=titleRepository.findAllBySeasonNrOrderByViewsDesc(0);
       return TitleDTOMapper.mapToDTOList(titles.stream().limit(10).collect(Collectors.toList()));
    }

    public Integer countSeries(String title){
        return titleRepository.findSeasonsByTitle(title).size();
    }

    // TWO PARAMS FILTERS

    public Set<TitleDTO> getAllTitlesByTypeAndPopularity(String type){
        Set<Title> titles=titleRepository.findAllBySeasonNrTypeOrderByViewsDesc(0,type);
        return TitleDTOMapper.mapToDTOSet(titles.stream().limit(10).collect(Collectors.toSet()));
    }

    public Set<TitleDTO>  getAllTitlesByTypeAndGenre(String type,String genre){
        Set<Title> titles=titleRepository.findAllByTypeGenre(type,genre);
        return TitleDTOMapper.mapToDTOSet(titles);
    }

    public List<TitleDTO>  getAllTitlesByTypeAndRecentlyAdded(String type){
        LocalDate currentDate=LocalDate.now();
        currentDate=currentDate.minusMonths(1);
      List<Title> titles=titleRepository.findByRecentlyAddedAndType(type,currentDate);
        return TitleDTOMapper.mapToDTOList(titles);
    }

    public List<TitleDTO>  getAllTitlesByTypeAndAlphabetic(String type){
        List<Title> titles=titleRepository.findAllByTypeAlphabetic(type);
        return TitleDTOMapper.mapToDTOList(titles);
    }

    // TWO PARAMS FILTERS

    public Set<TitleDTO> getAllTitlesByGenreAndPopularity(String genre){
        Set<Title> titles=titleRepository.findAllBySeasonNrGenreOrderByViewsDesc(genre);
        return TitleDTOMapper.mapToDTOSet(titles.stream().limit(10).collect(Collectors.toSet()));
    }

    public List<TitleDTO>  getAllTitlesByGenreAndRecentlyAdded(String genre){
        LocalDate currentDate=LocalDate.now();
        currentDate=currentDate.minusMonths(1);
        List<Title> titles=titleRepository.findByRecentlyAddedAndGenre(genre,currentDate);
        return TitleDTOMapper.mapToDTOList(titles);
    }

    public List<TitleDTO>  getAllTitlesByGenreAndAlphabetic(String genre){
        List<Title> titles=titleRepository.findAllByGenreAlphabetic(genre);
        return TitleDTOMapper.mapToDTOList(titles);
    }




}
