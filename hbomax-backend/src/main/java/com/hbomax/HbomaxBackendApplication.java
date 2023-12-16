package com.hbomax;

import com.hbomax.config.RSAKeyProperties;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
import com.hbomax.services.ImageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cglib.core.Local;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
@EnableConfigurationProperties(RSAKeyProperties.class)
@SpringBootApplication
public class HbomaxBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HbomaxBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepo, UserRepository userRepo, PasswordEncoder passwordEncoder, PersonRepository personRepo, TitleRoleRepository titleRoleRepo, GenreRepository genreRepo, CountryRepository countryRepo,LenguageRepository lenguageRepo,CompanyRepository companyRepo){
		return args ->{


		};
}

	}
