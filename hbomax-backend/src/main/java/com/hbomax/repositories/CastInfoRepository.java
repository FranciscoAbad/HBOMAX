package com.hbomax.repositories;

import com.hbomax.models.CastInfo;
import com.hbomax.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface CastInfoRepository extends JpaRepository<CastInfo,Integer> {
    public Optional<CastInfo> findByCastId(Integer castId);

    @Query("SELECT ci.characterPicture FROM CastInfo ci " +
            "JOIN ci.title t " +
            "JOIN t.brands b " +
            "WHERE b.brandName = :brandName")
    Set<Image> findCharacterPicturesByBrandName(@Param("brandName") String brandName);

    @Query("SELECT c FROM CastInfo c JOIN c.title t WHERE t.title=:titleName AND t.seasonNr=:seasonNr AND t.episodeNr=:episodeNr")
    Set<CastInfo> findCastInfoByTitleSeasonAndEpisode(@Param("titleName") String titleName, @Param("seasonNr") Integer seasonNr, @Param("episodeNr") Integer episodeNr);

}
