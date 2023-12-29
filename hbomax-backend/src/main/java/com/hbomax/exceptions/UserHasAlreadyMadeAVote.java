package com.hbomax.exceptions;

public class UserHasAlreadyMadeAVote extends RuntimeException {

    private static final long serialVersionUID=1L;

    public UserHasAlreadyMadeAVote(){
        super("You've already made a vote on this title");
    }
}
