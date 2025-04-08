package com.hbomax.mappers;

import com.hbomax.dto.CollectionResponse;
import com.hbomax.models.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CollectionMapper {
    private final TitleMapper titleMapper;

    @Autowired
    public CollectionMapper(TitleMapper titleMapper) {
        this.titleMapper = titleMapper;
    }

    public CollectionResponse fromCollection(Collection collection) {
        return new CollectionResponse(
                collection.getCollectionId(),
                collection.getCollectionName(),
                collection.getCollectionDescription(),
                collection.getCardPicture(),
                collection.getBannerPicture(),
                collection.getNamePicture(),
                collection.getHeroPicture(),
               titleMapper.mapToPreviewSet(collection.getCollectionTitles())
        );
    }
}
