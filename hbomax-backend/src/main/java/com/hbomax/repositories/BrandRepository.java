package com.hbomax.repositories;

import com.hbomax.models.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface BrandRepository extends JpaRepository<Brand,Integer> {

    Optional<Brand> findByBrandId(Integer brandId);
    Optional<Brand> findByBrandName(String brandName);

}
