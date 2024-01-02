package com.hbomax.repositories;

import com.hbomax.models.View;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewRepository extends JpaRepository<View,Integer> {
}
