package com.hbomax.repositories;

import com.hbomax.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image> findImageByImageName(String imageName);
}
