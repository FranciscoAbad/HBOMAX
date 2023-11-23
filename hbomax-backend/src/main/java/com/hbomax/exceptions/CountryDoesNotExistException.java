package com.hbomax.exceptions;

public class CountryDoesNotExistException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public CountryDoesNotExistException(){
        super("The country you're looking for does not exist");
    }
}
