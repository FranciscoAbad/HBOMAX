package com.hbomax.exceptions;

public class InvalidNameException extends Exception {
    private static final long serialVersionUID=1L;
    public InvalidNameException() {
        super("The name you've provided is invalid");
    }
}
