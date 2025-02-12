package com.hbomax.exceptions;

public class UnableToCreateCollectionException extends RuntimeException {
  private static final long serialVersionUID=1L;
  public UnableToCreateCollectionException() {
        super("Unable to create Collection");
    }
}
