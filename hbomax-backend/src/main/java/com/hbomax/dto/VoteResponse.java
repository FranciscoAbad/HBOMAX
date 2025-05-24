package com.hbomax.dto;

import java.time.LocalDateTime;

public record VoteResponse(
        Integer voteId,
        float rating,
        Integer applicationUserId,
        Integer titleId,
        LocalDateTime rateDate
) {
}
