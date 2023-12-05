package com.hbomax.exceptions;

public class BrandDoesNotExistException extends RuntimeException{
    private static final long serialVersionUID=1L;
    public BrandDoesNotExistException() {
        super("The brand you're looking for does not exist");
    }
}
