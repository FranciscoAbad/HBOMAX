package com.hbomax.services;


import com.hbomax.exceptions.UnableToCreateBrandException;
import com.hbomax.models.Brand;
import com.hbomax.models.Image;
import com.hbomax.repositories.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class BrandService {

    private final BrandRepository brandRepo;

    private final ImageService imageService;
    @Autowired

    public BrandService(BrandRepository brandRepo, ImageService imageService) {
        this.brandRepo = brandRepo;
        this.imageService = imageService;
    }






    public Brand createBrand(String brandName, MultipartFile file){

        try{
            Brand brand=new Brand();
            brand.setBrandName(brandName);
            Image logo=imageService.uploadImage(file,"brand-logo");
            brand.setBrandLogo(logo);
           return brandRepo.save(brand);
        } catch (Exception e){
            throw new UnableToCreateBrandException();
        }
    }

}
