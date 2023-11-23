package com.hbomax.exceptions;

public class GenreDoesNotExistException extends RuntimeException {

    private static final long serialVersionUID=1L;

    public GenreDoesNotExistException() {
        super("The genre you're looking for does not exist");
    }
}
