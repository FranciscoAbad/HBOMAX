package com.hbomax.dto;


public record ProfileResponse(
        Integer profileId,
        String name,
        ImageResponse image
) {
}
