package com.hbomax.exceptions;

public class UnableToResolvePhotoException extends Exception{

    private static final long serialVersionUID=1L;

    public UnableToResolvePhotoException(){
        super("The photo you are looking for cannot be found");
    }
}
