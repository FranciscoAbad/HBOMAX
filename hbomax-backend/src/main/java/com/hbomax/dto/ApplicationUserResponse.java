package com.hbomax.dto;

public record ApplicationUserResponse(
        Integer userId,
        String firstName,
        String lastName,
        String email,
        String username
) {
}
