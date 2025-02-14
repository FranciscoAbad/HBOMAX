package com.hbomax.mappers;

import com.hbomax.dto.CastInfoDTO;
import com.hbomax.dto.CollectionDTO;
import com.hbomax.models.CastInfo;
import com.hbomax.models.Collection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

public class CollectionDTOMapper {

    public static CollectionDTO mapToDTO(Collection collection) {
        return new CollectionDTO(
                collection.getCollectionId(),
                collection.getCollectionName(),
                collection.getCollectionDescription(),
                collection.getCardPicture(),
                collection.getBannerPicture(),
                collection.getNamePicture(),
                collection.getHeroPicture(),
                TitleDTOMapper.mapToDTOSet(collection.getCollectionTitles())
        );
    }
}
