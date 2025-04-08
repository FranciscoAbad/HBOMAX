package com.hbomax.services;

import com.hbomax.dto.ProfileResponse;
import com.hbomax.exceptions.ImageDoesNotExistException;
import com.hbomax.exceptions.ProfileDoesNotExistException;
import com.hbomax.exceptions.UserDoesNotExistException;
import com.hbomax.mappers.ProfileMapper;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Image;
import com.hbomax.models.Profile;
import com.hbomax.repositories.ImageRepository;
import com.hbomax.repositories.ProfileRepository;
import com.hbomax.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProfileService {

    private final ProfileRepository profileRepo;
    private final UserRepository userRepo;
    private final ProfileMapper profileMapper;
    private final ImageRepository imageRepo;

    @Autowired
    public ProfileService(ProfileRepository profileRepo, UserRepository userRepo, ProfileMapper profileMapper, ImageRepository imageRepo) {
        this.profileRepo = profileRepo;
        this.userRepo = userRepo;
        this.profileMapper = profileMapper;
        this.imageRepo = imageRepo;
    }

    public ProfileResponse createProfile(String userName, String profileName, Long imageId){
        ApplicationUser user=userRepo.findByUsername(userName).orElseThrow(UserDoesNotExistException::new);
        Profile profile=new Profile();
        profile.setName(profileName);
        if(imageId!=-1){
            Image image=imageRepo.findById(imageId).orElseThrow(ImageDoesNotExistException::new);
            profile.setProfilePicture(image);
        }
        user.getProfiles().add(profile);
        userRepo.save(user);


        return profileMapper.fromProfile(profile);
    }

    public Set<ProfileResponse> getAllProfilesByUsername(String username){
       ApplicationUser user= userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);

       return user.getProfiles().stream().map(profileMapper::fromProfile).collect(Collectors.toSet());
    }

    public ProfileResponse setProfilePictureAndName(Integer profileId,Long imageId,String profileName){
        Profile profile=profileRepo.findByProfileId(profileId).orElseThrow(ProfileDoesNotExistException::new);
        if(imageId!=-1){
            Image image=imageRepo.findById(imageId).orElseThrow(ImageDoesNotExistException::new);
            profile.setProfilePicture(image);
        }
        profile.setName(profileName);

       return profileMapper.fromProfile(profileRepo.save(profile));
    }

}
