package com.hbomax.mappers;

import com.hbomax.dto.TitleDTO;
import com.hbomax.models.Brand;
import com.hbomax.models.Title;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class TitleDTOMapper {

    public static TitleDTO mapToDTO(Title title) {
        if (title == null) {
            return null;
        }

        return new TitleDTO(
                title.getTitleId(),
                title.getTitle(),
                getFirstBrandName(title),
                title.getBannerPicture(),
                title.getPosterPicture()
        );
    }

    public static Set<TitleDTO> mapToDTOSet(Set<Title> titles) {
        return titles.stream()
                .map(TitleDTOMapper::mapToDTO)
                .collect(Collectors.toSet());
    }

    private static String getFirstBrandName(Title title) {
        return title.getBrands().stream()
                .findFirst()
                .map(Brand::getBrandName)
                .orElse(null);
    }
}