package com.hbomax.exceptions;

public class IncorrectVerificationCodeException extends RuntimeException{

    private static final long serialVersionUID=1L;

    public IncorrectVerificationCodeException(){
        super("The code you passed did not match the user verification code");
    }
}
