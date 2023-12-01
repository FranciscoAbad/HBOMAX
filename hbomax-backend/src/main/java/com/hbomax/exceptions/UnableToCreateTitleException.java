package com.hbomax.exceptions;

public class UnableToCreateTitleException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public UnableToCreateTitleException() {
        super("Unable to create post");
    }
}
