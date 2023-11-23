package com.hbomax.exceptions;

public class RoleDoesNotExistException extends  RuntimeException{
    private static final long serialVersionUID=1L;
    public RoleDoesNotExistException() {

        super("The role you are looking for does not exist");
    }
}
