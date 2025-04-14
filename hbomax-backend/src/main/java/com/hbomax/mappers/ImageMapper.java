package com.hbomax.mappers;

import com.hbomax.dto.ImageResponse;
import com.hbomax.models.Image;
import org.springframework.stereotype.Service;

@Service
public class ImageMapper {
    public ImageResponse fromImage(Image image) {
        return new ImageResponse(
                image.getImageId(),
                image.getImageName(),
                image.getImageType(),
                image.getImagePath(),
                image.getImageURL(),
                image.getImagePrefix()
        );
    }
}
