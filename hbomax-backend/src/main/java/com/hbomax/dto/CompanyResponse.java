package com.hbomax.dto;

import jakarta.persistence.Column;

public record CompanyResponse(
       Integer companyId,
       String companyName
){

}
