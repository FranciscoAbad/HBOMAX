package com.hbomax.mappers;

import com.hbomax.dto.ImageResponse;
import com.hbomax.dto.ProfileResponse;
import com.hbomax.models.Image;
import com.hbomax.models.Profile;
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
