package com.hbomax.mappers;

import com.hbomax.dto.CastInfoResponse;
import com.hbomax.models.CastInfo;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CastInfoMapper {

    public Set<CastInfoResponse> mapTocCastInfoResponseSet(Set<CastInfo> castInfoSet) {
        return castInfoSet.stream().map(this::fromCast).collect(Collectors.toSet());
    }

    public CastInfoResponse fromCast(CastInfo castInfo) {
        return new CastInfoResponse(
                castInfo.getCastId(),
                castInfo.getPerson(),
                castInfo.getRole(),
                castInfo.getCharacterPicture(),
                castInfo.getCharacter(),
                castInfo.getProducerRole(),
                castInfo.getWriterRole()
        );
    }
}