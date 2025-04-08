package com.hbomax.dto;

import java.util.Set;

public record ProfileResponse(
        Integer profileId,
        String name,
        ImageResponse image
)
{}
