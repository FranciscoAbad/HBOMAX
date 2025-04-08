package com.hbomax.mappers;

import com.hbomax.dto.ProfileResponse;
import com.hbomax.dto.VoteResponse;
import com.hbomax.models.Profile;
import com.hbomax.models.Vote;
import org.springframework.stereotype.Service;

@Service
public class VoteMapper {
    public VoteResponse fromVote(Vote vote) {
        return new VoteResponse(
               vote.getVoteId(),
                vote.getRating(),
                vote.getUserVote().getUserId(),
                vote.getTitle().getTitleId(),
                vote.getRateDate()
        );
    }
}
