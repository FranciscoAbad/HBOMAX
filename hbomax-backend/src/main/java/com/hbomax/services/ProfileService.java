package com.hbomax.services;

import com.hbomax.exceptions.ImageDoesNotExistException;
import com.hbomax.exceptions.ProfileDoesNotExistException;
import com.hbomax.exceptions.UserDoesNotExistException;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Image;
import com.hbomax.models.Profile;
import com.hbomax.repositories.ImageRepository;
import com.hbomax.repositories.ProfileRepository;
import com.hbomax.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ProfileService {

    private final ProfileRepository profileRepo;
    private final UserRepository userRepo;

    private final ImageRepository imageRepo;
    @Autowired

    public ProfileService(ProfileRepository profileRepo, UserRepository userRepo, ImageRepository imageRepo) {
        this.profileRepo = profileRepo;
        this.userRepo = userRepo;
        this.imageRepo = imageRepo;
    }





    public Profile createProfile(String userName,String profileName,Long imageId){
        ApplicationUser user=userRepo.findByUsername(userName).orElseThrow(UserDoesNotExistException::new);
        Profile profile=new Profile();
        profile.setName(profileName);
        if(imageId!=-1){
            Image image=imageRepo.findById(imageId).orElseThrow(ImageDoesNotExistException::new);
            profile.setProfilePicture(image);
        }
        user.getProfiles().add(profile);
        userRepo.save(user);


        return profile;
    }

    public Set<Profile> getAllProfilesByUsername(String username){
       ApplicationUser user= userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);

       return user.getProfiles();
    }

    public Profile setProfilePictureAndName(Integer profileId,Long imageId,String profileName){
        Profile profile=profileRepo.findByProfileId(profileId).orElseThrow(ProfileDoesNotExistException::new);
        Image image=imageRepo.findById(imageId).orElseThrow(ImageDoesNotExistException::new);
        profile.setProfilePicture(image);
        profile.setName(profileName);

       return profileRepo.save(profile);
    }

}
