package com.hbomax.repositories;

import com.hbomax.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;
import java.util.Set;

@Repository

public interface ProfileRepository extends JpaRepository<Profile,Integer> {

    Optional<Profile> findByProfileId(Integer profileId);

}
