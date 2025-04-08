package com.hbomax.dto;

import jakarta.persistence.Column;

public record CountryResponse(
        Integer countryId,
        String country
) {
}
