package com.hbomax.repositories;

import com.hbomax.models.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote,Integer> {
    @Override
    Optional<Vote> findById(Integer integer);

    @Query("SELECT v from Vote v JOIN v.userVote vu JOIN v.title t WHERE vu.username=:username AND t.titleId=:titleId")
    Optional<Vote> findVoteByUserAndTitle(@Param("username") String username,@Param("titleId") Integer titleId);


}
