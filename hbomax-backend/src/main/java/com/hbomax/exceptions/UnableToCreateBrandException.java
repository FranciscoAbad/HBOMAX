package com.hbomax.exceptions;

public class UnableToCreateBrandException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public UnableToCreateBrandException() {
        super("Unable to create brand");
    }
}
