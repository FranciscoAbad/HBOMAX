package com.hbomax.services;


import com.hbomax.exceptions.TitleDoesNotExistException;
import com.hbomax.exceptions.UserDoesNotExistException;
import com.hbomax.exceptions.UserHasAlreadyMadeAVote;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Title;
import com.hbomax.models.Vote;
import com.hbomax.repositories.TitleRepository;
import com.hbomax.repositories.UserRepository;
import com.hbomax.repositories.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class VoteService {

    private final VoteRepository voteRepo;

    private final TitleRepository titleRepo;

    private final UserRepository userRepo;
    @Autowired

    public VoteService(VoteRepository voteRepo, TitleRepository titleRepo, UserRepository userRepo) {
        this.voteRepo = voteRepo;
        this.titleRepo = titleRepo;
        this.userRepo = userRepo;
    }



    public Vote createVote(Integer rating, Integer titleId, String username) throws UserHasAlreadyMadeAVote{


            Title title=titleRepo.findById(titleId).orElseThrow(TitleDoesNotExistException::new);
            ApplicationUser user=userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
Vote voteExists=voteRepo.findVoteByUserAndTitle(username,titleId).orElse(null);
            if(voteExists!=null){
                throw new UserHasAlreadyMadeAVote();
            }

            Vote vote=new Vote();
            vote.setRating(rating);
            vote.setUserVote(user);
            vote.setTitle(title);
            vote.setRateDate(LocalDateTime.now());
            return voteRepo.save(vote);


    }

    public Vote findVoteByTitleAndUser(Integer titleId,String username){
        return voteRepo.findVoteByUserAndTitle(username,titleId).orElse(null);

    }



}
