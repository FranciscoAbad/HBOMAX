package com.hbomax.repositories;

import com.hbomax.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ProfileRepository extends JpaRepository<Profile, Integer> {

    Optional<Profile> findByProfileId(Integer profileId);

}
