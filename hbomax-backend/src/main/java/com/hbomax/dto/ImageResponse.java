package com.hbomax.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public record ImageResponse(
    Long imageId,
    String imageName,
    String imageType,
    String imagePath,
    String imageURL,
    String imagePrefix
){
}
