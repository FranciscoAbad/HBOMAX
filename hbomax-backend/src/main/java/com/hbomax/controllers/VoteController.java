package com.hbomax.controllers;

import com.google.common.net.HttpHeaders;
import com.hbomax.models.Vote;
import com.hbomax.services.TokenService;
import com.hbomax.services.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/vote")
public class VoteController {

    private final TokenService tokenService;

    private final VoteService voteService;

    @Autowired
    public VoteController(TokenService tokenService, VoteService voteService) {
        this.tokenService = tokenService;
        this.voteService = voteService;
    }

    @PostMapping("/title/{titleId}/rating/{rating}")
   public Vote makeAVote(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @PathVariable("titleId") Integer titleId, @PathVariable("rating") float rating){
        String username=tokenService.getUsernameFromToken(token);
        return voteService.createVote(rating,titleId,username);
    }

    @GetMapping("/get/title/{titleId}")
    public float getAVoteFromUserAndTitle(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@PathVariable("titleId") Integer titleId){
        String username=tokenService.getUsernameFromToken(token);

    return voteService.findVoteByTitleAndUser(titleId,username);
    }

}
