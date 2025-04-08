package com.hbomax.mappers;

import com.hbomax.dto.CompanyResponse;
import com.hbomax.models.Company;
import org.springframework.stereotype.Service;

@Service
public class CompanyMapper {
    public CompanyResponse fromCompany(Company company){
        return new CompanyResponse(
                company.getCompanyId(),
                company.getCompanyName()
        );
    }
}
