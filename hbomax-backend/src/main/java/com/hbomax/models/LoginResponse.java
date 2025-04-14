package com.hbomax.models;


import com.hbomax.dto.ApplicationUserResponse;

public class LoginResponse {
    private String token;
    private ApplicationUserResponse user;


    public LoginResponse() {
        super();
    }

    public LoginResponse(ApplicationUserResponse user, String token) {
        this.user = user;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public ApplicationUserResponse getUser() {
        return user;
    }

    public void setUser(ApplicationUserResponse user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "token='" + token + '\'' +
                ", user=" + user +
                '}';
    }
}
