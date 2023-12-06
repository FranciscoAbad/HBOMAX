package com.hbomax.exceptions;

public class ImageDoesNotExistException extends RuntimeException {

    private static final long serialVersionUID=1L;

    public ImageDoesNotExistException() {
        super("The image you're looking for does not exist");
    }
}
