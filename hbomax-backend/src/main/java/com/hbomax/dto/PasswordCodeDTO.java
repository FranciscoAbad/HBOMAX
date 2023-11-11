package com.hbomax.dto;

public class PasswordCodeDTO {
    private int code;
    private String email;

    public PasswordCodeDTO(){
        super();
    }

    public PasswordCodeDTO(int code, String email) {
        this.code = code;
        this.email = email;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
