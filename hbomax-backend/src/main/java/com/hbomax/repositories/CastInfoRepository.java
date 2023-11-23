package com.hbomax.repositories;

import com.hbomax.models.CastInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CastInfoRepository extends JpaRepository<CastInfo,Integer> {
    public Optional<CastInfo> findByCastId(Integer castId);

}
