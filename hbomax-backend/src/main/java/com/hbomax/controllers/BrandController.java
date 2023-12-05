package com.hbomax.controllers;

import com.hbomax.models.Brand;
import com.hbomax.models.Genre;
import com.hbomax.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/brand")
@CrossOrigin("*")
public class BrandController {


    private final BrandService brandService;

    @Autowired

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @PostMapping("/add/{brandName}")
    public Brand createBrand(@RequestPart("brandLogo") MultipartFile brandLogo, @PathVariable("brandName") String brandName){
        return brandService.createBrand(brandName,brandLogo);
    }
}

