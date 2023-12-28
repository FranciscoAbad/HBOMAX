package com.hbomax.mappers;

import com.hbomax.dto.CastInfoDTO;
import com.hbomax.models.CastInfo;

import java.util.HashSet;
import java.util.Set;

public class CastInfoMapper {

    public static Set<CastInfoDTO> mapToDTOSet(Set<CastInfo> castInfoSet) {
        Set<CastInfoDTO> castInfoDTOSet = new HashSet<>();

        for (CastInfo castInfo : castInfoSet) {
            CastInfoDTO castInfoDTO = mapToDTO(castInfo);
            castInfoDTOSet.add(castInfoDTO);
        }

        return castInfoDTOSet;
    }

    public static CastInfoDTO mapToDTO(CastInfo castInfo) {
        return new CastInfoDTO(
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