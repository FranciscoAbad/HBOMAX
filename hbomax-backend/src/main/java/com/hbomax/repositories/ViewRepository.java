package com.hbomax.repositories;

import com.hbomax.models.View;
import com.hbomax.models.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ViewRepository extends JpaRepository<View,Integer> {

    @Query("SELECT v from View v JOIN v.userView vu JOIN v.title t WHERE vu.username=:username AND t.titleId=:titleId")
    Optional<View> findViewByUserAndTitle(@Param("username") String username, @Param("titleId") Integer titleId);

}
