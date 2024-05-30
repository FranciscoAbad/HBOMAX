package com.hbomax.services;

import com.hbomax.exceptions.TitleDoesNotExistException;
import com.hbomax.exceptions.UserDoesNotExistException;
import com.hbomax.exceptions.UserHasAlreadyMadeAView;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Title;
import com.hbomax.models.View;
import com.hbomax.repositories.TitleRepository;
import com.hbomax.repositories.UserRepository;
import com.hbomax.repositories.ViewRepository;
import jakarta.persistence.OptimisticLockException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ViewService {

    private final ViewRepository viewRepo;
    private final UserRepository userRepo;
    private final TitleRepository titleRepo;
    @Autowired
    public ViewService(ViewRepository viewRepo, UserRepository userRepo, TitleRepository titleRepo) {
        this.viewRepo = viewRepo;
        this.userRepo = userRepo;
        this.titleRepo = titleRepo;
    }



    public View addView(String username, Integer titleId) throws UserHasAlreadyMadeAView{
        try{
        ApplicationUser user=userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        Title title=titleRepo.findById(titleId).orElseThrow(TitleDoesNotExistException::new);
        View alreadyExist=viewRepo.findViewByUserAndTitle(username,titleId).orElse(null);

        if(alreadyExist!=null){
            throw new UserHasAlreadyMadeAView();
        }
            title.setViews(title.getViews()+1);
            View view = new View();
            view.setUserView(user);
            view.setTitle(title);
            view.setViewDate(LocalDateTime.now());


                return viewRepo.save(view);
        } catch( Exception e){
             throw new RuntimeException(e);
            }




}
}
