package com.hbomax.exceptions;


public class TitleDoesNotExistException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public TitleDoesNotExistException(){

        super("The title you are looking for does not exist");
    }
}
