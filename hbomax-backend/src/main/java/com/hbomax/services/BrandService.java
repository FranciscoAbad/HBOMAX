package com.hbomax.services;


import com.hbomax.dto.BrandResponse;
import com.hbomax.exceptions.UnableToCreateBrandException;
import com.hbomax.mappers.BrandMapper;
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
    private final BrandMapper brandMapper;

    @Autowired

    public BrandService(BrandRepository brandRepo, ImageService imageService, BrandMapper brandMapper) {
        this.brandRepo = brandRepo;
        this.imageService = imageService;
        this.brandMapper = brandMapper;
    }


    public BrandResponse createBrand(String brandName, MultipartFile file) {

        try {
            Brand brand = new Brand();
            brand.setBrandName(brandName);
            Image logo = imageService.uploadImage(file, "brand-logo");
            brand.setBrandLogo(logo);
            return brandMapper.fromBrand(brandRepo.save(brand));
        } catch (Exception e) {
            throw new UnableToCreateBrandException();
        }
    }

}
