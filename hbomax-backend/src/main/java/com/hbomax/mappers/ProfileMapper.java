package com.hbomax.mappers;

import com.hbomax.dto.ProfileResponse;
import com.hbomax.models.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileMapper {
    private final ImageMapper imageMapper;

    @Autowired
    public ProfileMapper(ImageMapper imageMapper) {
        this.imageMapper = imageMapper;
    }

    public ProfileResponse fromProfile(Profile profile) {
        return new ProfileResponse(
                profile.getProfileId(),
                profile.getName(),
                profile.getProfilePicture() != null
                        ? imageMapper.fromImage(profile.getProfilePicture())
                        : null
        );
    }
}
