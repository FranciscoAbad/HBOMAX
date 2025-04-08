package com.hbomax.dto;

import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Title;
import jakarta.persistence.*;

import java.time.LocalDateTime;

public record VoteResponse (
    Integer voteId,
    float rating,
    Integer applicationUserId,
    Integer titleId,
    LocalDateTime rateDate
)
{}
