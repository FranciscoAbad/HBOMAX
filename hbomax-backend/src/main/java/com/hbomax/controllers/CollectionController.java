package com.hbomax.controllers;


import com.hbomax.dto.CollectionResponse;
import com.hbomax.models.Collection;
import com.hbomax.services.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/collection")
public class CollectionController {

    private final CollectionService collectionService;


    @Autowired
    public CollectionController(CollectionService collectionService) {
        this.collectionService = collectionService;
    }


    @PostMapping("/create/{collectionName}")
    public Collection createCollection(@RequestPart("cardPicture") MultipartFile cardPicture, @RequestPart("bannerPicture") MultipartFile bannerPicture, @RequestPart("namePicture") MultipartFile namePicture, @PathVariable("collectionName") String collectionName) {
        return collectionService.createCollection(collectionName, cardPicture, bannerPicture, namePicture);
    }

    @GetMapping("/get/{collectionName}")
    public CollectionResponse getCollection(@PathVariable("collectionName") String collectionName) {
        return collectionService.getCollectionByName(collectionName);
    }
}

