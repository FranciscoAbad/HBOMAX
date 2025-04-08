package com.hbomax.mappers;

import com.hbomax.dto.BrandResponse;
import com.hbomax.models.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandMapper {
    private final ImageMapper imageMapper;

    @Autowired
    public BrandMapper(ImageMapper imageMapper) {
        this.imageMapper = imageMapper;
    }

    public BrandResponse fromBrand(Brand brand){
        return new BrandResponse(
                brand.getBrandId(),
                brand.getBrandName(),
                brand.getBrandLogo() != null
                    ? imageMapper.fromImage(brand.getBrandLogo())
                    : null
        );
    }
}
