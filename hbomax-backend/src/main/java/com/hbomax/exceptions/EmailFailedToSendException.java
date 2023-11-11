package com.hbomax.exceptions;

public class EmailFailedToSendException extends RuntimeException {

    private static final long serialVersionUID=1L;

    public EmailFailedToSendException(){
        super("The email failed to send");
    }
}
