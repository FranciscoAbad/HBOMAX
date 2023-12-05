package com.hbomax.exceptions;

public class CompanyDoesNotExistException extends RuntimeException {
    private static final long serialVersionUID=1L;

    public CompanyDoesNotExistException() {
        super("The company you're looking for does not exist");
    }
}
