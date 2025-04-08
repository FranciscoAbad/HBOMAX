package com.hbomax.services;

import com.hbomax.dto.CompanyResponse;
import com.hbomax.mappers.CompanyMapper;
import com.hbomax.models.Company;
import com.hbomax.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {

    private final CompanyRepository companyRepo;
    private final CompanyMapper companyMapper;

    @Autowired
    public CompanyService(CompanyRepository companyRepo, CompanyMapper companyMapper) {
        this.companyRepo = companyRepo;
        this.companyMapper = companyMapper;
    }

    public CompanyResponse createCompany(String companyName){
    Company company=new Company();
    company.setCompanyName(companyName);
    return companyMapper.fromCompany(companyRepo.save(company));
    }
}
