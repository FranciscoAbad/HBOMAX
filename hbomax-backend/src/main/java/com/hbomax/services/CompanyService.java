package com.hbomax.services;

import com.hbomax.models.Company;
import com.hbomax.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {

    private final CompanyRepository companyRepo;
@Autowired
    public CompanyService(CompanyRepository companyRepo) {
        this.companyRepo = companyRepo;
    }

    public Company createCompany(String companyName){
    Company company=new Company();
    company.setCompanyName(companyName);

    return companyRepo.save(company);
    }
}
