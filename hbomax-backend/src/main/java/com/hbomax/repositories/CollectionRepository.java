package com.hbomax.repositories;

import com.hbomax.models.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CollectionRepository extends JpaRepository<Collection,Integer> {
    Optional<Collection> findByCollectionName(String collectionName);
}
