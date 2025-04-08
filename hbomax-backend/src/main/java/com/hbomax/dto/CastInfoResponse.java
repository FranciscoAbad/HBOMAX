package com.hbomax.dto;

import com.hbomax.models.Image;
import com.hbomax.models.Person;
import com.hbomax.models.TitleRole;

public record CastInfoResponse(
     Integer castInfoId,
     Person person,
     TitleRole role,
     Image characterPicture,
     String characterName,
     String producerRole,
     String writerRole
)
{}
