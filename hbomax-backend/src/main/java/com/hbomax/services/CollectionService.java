package com.hbomax.services;


import com.hbomax.exceptions.UnableToCreateCollectionException;
import com.hbomax.exceptions.UnabledToSavePhotoException;
import com.hbomax.models.Collection;
import com.hbomax.models.Image;
import com.hbomax.repositories.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CollectionService {

    private final CollectionRepository collectionRepository;
    private final ImageService imageService;

    @Autowired
    public CollectionService(CollectionRepository collectionRepository, ImageService imageService) {
        this.collectionRepository = collectionRepository;
        this.imageService = imageService;
    }

    public Collection createCollection(String collectionName, MultipartFile cardPicture, MultipartFile bannerPicture, MultipartFile namePicture)  {

        if(collectionRepository.findByCollectionName(collectionName).isPresent()){
            throw new RuntimeException("Unable to create collection, duplicated collection name");
        }

        try{

            Image card=imageService.uploadImage(cardPicture,"collectionCard");
            Image banner=imageService.uploadImage(bannerPicture,"collectionBanner");
            Image name=imageService.uploadImage(namePicture,"collectionName");




            Collection collection=new Collection();
        collection.setCollectionName(collectionName);
        collection.setCardPicture(card);
        collection.setBannerPicture(banner);
        collection.setNamePicture(name);



            collectionRepository.save(collection);
            return  collection;
       } catch (Exception e) {
           throw new UnableToCreateCollectionException();
       }

    }


    public Collection getCollectionByName(String collectionName){
        Collection collection=collectionRepository.findByCollectionName(collectionName).orElseThrow(RuntimeException::new);
        return collection;
    }

}
