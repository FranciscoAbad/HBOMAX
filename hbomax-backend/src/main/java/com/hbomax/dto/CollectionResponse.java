package com.hbomax.dto;

import com.hbomax.models.Image;

import java.util.Set;

public record CollectionResponse(
        Integer collectionId,
        String collectionName,
        String collectionDescription,
        Image cardPicture,
        Image bannerPicture,
        Image namePicture,
        Image heroPicture,
        Set<TitlePreview> collectionTitles
) {
}


