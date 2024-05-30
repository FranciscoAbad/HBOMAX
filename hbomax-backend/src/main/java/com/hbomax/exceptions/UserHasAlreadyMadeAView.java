package com.hbomax.exceptions;

public class UserHasAlreadyMadeAView extends RuntimeException {

    private static final long serialVersionUID=1L;

    public UserHasAlreadyMadeAView(){
        super("You've already made a view on this title");
    }
}
