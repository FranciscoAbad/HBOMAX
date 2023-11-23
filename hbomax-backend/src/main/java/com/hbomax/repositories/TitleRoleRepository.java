package com.hbomax.repositories;

import com.hbomax.models.TitleRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface TitleRoleRepository extends JpaRepository<TitleRole,Integer> {
    Optional<TitleRole> findByRole(String role);
}
