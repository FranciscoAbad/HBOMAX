package com.hbomax.repositories;

import com.hbomax.models.Lenguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface LenguageRepository extends JpaRepository<Lenguage,Integer> {
    Optional<Lenguage> findById(Integer lenguageId);
    Optional<Lenguage> findByLenguage(String lenguage);
}
