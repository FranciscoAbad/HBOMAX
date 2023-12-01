package com.hbomax.exceptions;

public class UnabledToSavePhotoException extends Exception {

    private static final long serialVersionUID=1L;

    public UnabledToSavePhotoException(){
        super("Unable to save the supplied photo");
    }

}
