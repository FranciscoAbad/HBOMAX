package com.hbomax.exceptions;

public class LenguageDoesNotExistException extends RuntimeException{
    private static final long serialVersionUID=1L;
    public LenguageDoesNotExistException(){
        super("The lenguage you're looking for does not exist");
    }
}
