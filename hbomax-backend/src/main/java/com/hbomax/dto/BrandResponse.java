package com.hbomax.dto;

public record BrandResponse(
        Integer brandId,
        String brandName,
        ImageResponse brandLogo
) {
}
