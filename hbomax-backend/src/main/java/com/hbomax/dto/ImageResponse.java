package com.hbomax.dto;

public record ImageResponse(
        Long imageId,
        String imageName,
        String imageType,
        String imagePath,
        String imageURL,
        String imagePrefix
) {
}
