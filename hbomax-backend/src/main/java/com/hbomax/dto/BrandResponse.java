package com.hbomax.dto;
import com.hbomax.models.Image;

public record BrandResponse(
    Integer brandId,
    String brandName,
    ImageResponse brandLogo
){
}
