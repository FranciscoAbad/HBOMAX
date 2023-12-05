package com.hbomax.exceptions;

public class UnableToCreateGenreException extends  RuntimeException{
    private static final long serialVersionUID=1L;

    public UnableToCreateGenreException() {
        super("Unable to create Genre");
    }
}
