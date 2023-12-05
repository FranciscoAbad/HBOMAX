package com.hbomax.repositories;

import com.hbomax.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.Optional;
import java.util.Set;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image> findImageByImageName(String imageName);


    @Query("SELECT i FROM Image i WHERE i.imagePrefix=:prefix")
    Set<Image> getAllImagesByPrefix(@Param("prefix") String prefix);
}
