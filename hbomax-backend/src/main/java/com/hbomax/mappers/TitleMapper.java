package com.hbomax.mappers;

import com.hbomax.dto.TitlePreview;
import com.hbomax.dto.TitleResponse;
import com.hbomax.models.Brand;
import com.hbomax.models.Title;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TitleMapper {
    private final ImageMapper imageMapper;
    private final BrandMapper brandMapper;
    private final GenreMapper genreMapper;

    @Autowired
    public TitleMapper(ImageMapper imageMapper, BrandMapper brandMapper, GenreMapper genreMapper) {
        this.imageMapper = imageMapper;
        this.brandMapper = brandMapper;
        this.genreMapper = genreMapper;
    }

    public TitleResponse fromTitle(Title title) {
        return new TitleResponse(
                title.getTitleId(),
                title.getTitle(),
                title.getOverview(),
                title.getSeasonNr(),
                title.getEpisodeNr(),
                title.getEpisodeName(),
                title.getQuality(),
                title.getRuntime(),
                title.getReleaseDate(),
                title.getPopularity(),
                title.getRating(),
                title.getType(),
                title.getViews(),
                title.getVotes(),
                title.getPosterPicture() != null
                        ? imageMapper.fromImage(title.getPosterPicture())
                        : null,
                title.getBannerPicture() != null
                        ? imageMapper.fromImage(title.getBannerPicture())
                        : null,
                title.getNamePicture() != null
                        ? imageMapper.fromImage(title.getNamePicture())
                        : null,
                title.getGenres().stream().map(genreMapper::fromGenre).collect(Collectors.toSet()),
                title.getBrands().stream().map(brandMapper::fromBrand).collect(Collectors.toSet())

        );
    }

    public TitlePreview previewFromTitle(Title title) {
        if (title == null) {
            return null;
        }
        return new TitlePreview(
                title.getTitleId(),
                title.getTitle(),
                getFirstBrandName(title),
                title.getType(),
                title.getEpisodeNr(),
                title.getEpisodeName(),
                title.getRuntime(),
                title.getRating(),
                title.getOverview(),
                title.getReleaseDate(),
                title.getBannerPicture(),
                title.getPosterPicture(),
                title.getNamePicture()
        );
    }

    public Set<TitlePreview> mapToPreviewSet(Set<Title> titles) {
        return titles.stream()
                .map(this::previewFromTitle)
                .collect(Collectors.toSet());
    }

    public List<TitlePreview> mapToPreviewList(List<Title> titles) {
        return titles.stream()
                .map(this::previewFromTitle)
                .collect(Collectors.toList());
    }

    private String getFirstBrandName(Title title) {
        return title.getBrands().stream()
                .findFirst()
                .map(Brand::getBrandName)
                .orElse(null);
    }

}

