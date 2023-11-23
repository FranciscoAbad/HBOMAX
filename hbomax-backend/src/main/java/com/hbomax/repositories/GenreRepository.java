package com.hbomax.repositories;

import com.hbomax.models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GenreRepository extends JpaRepository<Genre,Integer> {
    Optional<Genre> findById(Integer id);
    Optional<Genre> findByGenre(String genre);
}
