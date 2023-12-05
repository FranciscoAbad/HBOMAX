package com.hbomax.repositories;

import com.hbomax.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface CompanyRepository extends JpaRepository<Company,Integer> {

    Optional<Company> findByCompanyId(Integer companyId);

    Optional<Company> findByCompanyName(String companyName);
}
