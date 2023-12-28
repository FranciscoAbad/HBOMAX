package com.hbomax.services;

import com.hbomax.dto.CastInfoDTO;
import com.hbomax.exceptions.*;
import com.hbomax.mappers.CastInfoMapper;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

@Service

public class CastService {
    private final TitleRepository titleRepo;
    private final PersonRepository personRepo;
    private final TitleRoleRepository roleRepo;
    private final CastInfoRepository castInfoRepo;

    private final CompanyRepository companyRepo;

    private final BrandRepository brandRepo;

    private final ImageService imageService;


    @Autowired

    public CastService(TitleRepository titleRepo, PersonRepository personRepo, TitleRoleRepository roleRepo, CastInfoRepository castInfoRepo,CompanyRepository companyRepo,BrandRepository brandRepo,ImageService imageService) {
        this.titleRepo = titleRepo;
        this.personRepo = personRepo;
        this.roleRepo = roleRepo;
        this.castInfoRepo = castInfoRepo;
        this.companyRepo=companyRepo;
        this.brandRepo=brandRepo;
        this.imageService=imageService;
    }


    public void addCharacterToSerie(String titleName,String firstName, String lastName,String characterName,MultipartFile file){
        try{
       List<Title> title=titleRepo.findAllByTitle(titleName);
       Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
       TitleRole role=roleRepo.findByRole("actor").orElseThrow(RoleDoesNotExistException::new);

       Image characterPicture=imageService.uploadImage(file,"character");



       for(int i=0; i<title.size();i++){

          CastInfo cast=new CastInfo();
          cast.setCharacter(characterName);
          cast.setTitle(title.get(i));
          cast.setPerson(person);
          cast.setCharacterPicture(characterPicture);
          cast.setRole(role);
          castInfoRepo.save(cast);

       }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void addWriterToSerie(String titleName,String firstName, String lastName,String writerRole){
        try{
            List<Title> title=titleRepo.findAllByTitle(titleName);
            Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
            TitleRole role=roleRepo.findByRole("writer").orElseThrow(RoleDoesNotExistException::new);





            for(int i=0; i<title.size();i++){

                CastInfo cast=new CastInfo();
                cast.setWriterRole(writerRole);
                cast.setTitle(title.get(i));
                cast.setPerson(person);
                cast.setRole(role);
                castInfoRepo.save(cast);

            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void addProducerToSerie(String titleName,String firstName, String lastName,String producerRole){
        try{
            List<Title> title=titleRepo.findAllByTitle(titleName);
            Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
            TitleRole role=roleRepo.findByRole("producer").orElseThrow(RoleDoesNotExistException::new);


            for(int i=0; i<title.size();i++){
                CastInfo cast=new CastInfo();
                cast.setProducerRole(producerRole);
                cast.setTitle(title.get(i));
                cast.setPerson(person);
                cast.setRole(role);
                castInfoRepo.save(cast);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void addDirectorToSerie(String titleName,String firstName, String lastName){
        try{
            List<Title> title=titleRepo.findAllByTitle(titleName);
            Person person = personRepo.findByFirstNameAndLastName(firstName, lastName).orElseThrow(PersonDoesNotExistException::new);
            TitleRole role=roleRepo.findByRole("director").orElseThrow(RoleDoesNotExistException::new);


            for(int i=0; i<title.size();i++){
                CastInfo cast=new CastInfo();
                cast.setTitle(title.get(i));
                cast.setPerson(person);
                cast.setRole(role);
                castInfoRepo.save(cast);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }


    public Set<Image> getAllCharacterPicturesByBrand(String brandName){
        return castInfoRepo.findCharacterPicturesByBrandName(brandName);
    }

    public Set<CastInfoDTO> getAllCastInfoOfTitleSeasonAndEpisode(String titleName,Integer seasonNr,Integer episodeNr){
       Set<CastInfo> castInfo =castInfoRepo.findCastInfoByTitleSeasonAndEpisode(titleName,seasonNr,episodeNr);
       return CastInfoMapper.mapToDTOSet(castInfo);
    }



}
