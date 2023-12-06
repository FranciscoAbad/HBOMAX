package com.hbomax.controllers;

import com.hbomax.exceptions.UnableToResolvePhotoException;
import com.hbomax.exceptions.UnabledToSavePhotoException;
import com.hbomax.models.Image;
import com.hbomax.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@RequestMapping("/images")
@CrossOrigin("*")
public class ImageController {

    private final ImageService imageService;

    @Autowired

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }


    @ExceptionHandler({UnabledToSavePhotoException.class,UnableToResolvePhotoException.class})
    ResponseEntity<String> handlePhotoExceptions(){
        return new ResponseEntity<String>("Unable to process the photo",HttpStatus.NOT_ACCEPTABLE);
    }


    @GetMapping("/all/{prefix}")
    public Set<Image> getAllImagesFromType(@PathVariable String prefix){
        return imageService.getAllImagesByPrefix(prefix);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<byte[]> downloadImage(@PathVariable String fileName) throws UnableToResolvePhotoException {
        byte[] imageBytes= imageService.downloadImage(fileName);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(imageService.getImageType(fileName))).body(imageBytes);
    }
}
