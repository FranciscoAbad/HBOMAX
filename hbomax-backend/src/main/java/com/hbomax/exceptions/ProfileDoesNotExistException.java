package com.hbomax.exceptions;

public class ProfileDoesNotExistException extends RuntimeException{
    private static final long serialVersionUID=1L;

    public ProfileDoesNotExistException() {
        super("The profile you're looking for does not exist");
    }
}
