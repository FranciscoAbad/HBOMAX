package com.hbomax.exceptions;

public class PersonDoesNotExistException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public PersonDoesNotExistException(){

        super("The person you are looking for does not exist");
    }
}
