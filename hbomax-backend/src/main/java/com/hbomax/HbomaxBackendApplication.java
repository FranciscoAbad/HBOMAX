package com.hbomax;

import com.hbomax.config.RSAKeyProperties;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
import com.hbomax.services.ImageService;
import com.hbomax.services.TitleService;
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
	CommandLineRunner run(RoleRepository roleRepo, UserRepository userRepo, PasswordEncoder passwordEncoder, PersonRepository personRepo, TitleRoleRepository titleRoleRepo, GenreRepository genreRepo, CountryRepository countryRepo, LenguageRepository lenguageRepo, CompanyRepository companyRepo, TitleService titleService){
		return args ->{
			System.out.println("---------->"+titleService.getAllTitlesByOneParam("en"));

			Role r =roleRepo.save(new Role(1,"USER"));

			Set<Role> roles=new HashSet<>();

			roles.add(r);

			ApplicationUser u=new ApplicationUser();
			u.setAuthorities(roles);
			u.setFirstName("Francisco");
			u.setLastName("Abad");
			u.setPassword(passwordEncoder.encode("12345678"));
			u.setUsername("francisco");
			u.setEmail("telken@gmail.com");
			u.setEnabled(true);
			userRepo.save(u);


			TitleRole titleRole=new TitleRole();
			titleRole.setRole("actor");
			titleRoleRepo.save(titleRole);

			TitleRole titleRole2=new TitleRole();
			titleRole2.setRole("writer");
			titleRoleRepo.save(titleRole2);

			TitleRole titleRole3=new TitleRole();
			titleRole3.setRole("producer");
			titleRoleRepo.save(titleRole3);

			TitleRole titleRole4=new TitleRole();
			titleRole4.setRole("director");
			titleRoleRepo.save(titleRole4);



			Person person=new Person();
			person.setFirstName("Jennifer");
			person.setLastName("Lawrence");
			person.setBirthplace("Texas");
			person.setBio("Jennifer Lawrence is an actriz who've involed multiple papers in famouses movies such as Hunger Games, etc");
			person.setGender("Female");
			person.setDob(LocalDate.of(1987,4,4));

			personRepo.save(person);

			Person person2=new Person();
			person2.setFirstName("Ben");
			person2.setLastName("Stiller");
			person2.setBirthplace("Wioming");
			person2.setBio("Ben Stiller is an actor who've involed multiple papers in famouses movies such as One Nigh at the Museum, etc");
			person2.setGender("Female");
			person2.setDob(LocalDate.of(1967,3,4));

			personRepo.save(person2);

			Genre horror=new Genre();
			horror.setGenre("horror");
			genreRepo.save(horror);

			Genre action=new Genre();
			action.setGenre("animation");
			genreRepo.save(action);


			Country argentina=new Country();
			argentina.setCountry("Argentina");
			countryRepo.save(argentina);

			Country unitedStates=new Country();
			unitedStates.setCountry("united-states");
			countryRepo.save(unitedStates);


			Lenguage spanish=new Lenguage();
			spanish.setLenguage("spanish");
			lenguageRepo.save(spanish);

			Lenguage english=new Lenguage();
			english.setLenguage("english");
			lenguageRepo.save(english);

			Company hbo=new Company();

			hbo.setCompanyName("hbo");
			companyRepo.save(hbo);

			Company warnerbros=new Company();

			warnerbros.setCompanyName("warner-bros");
			companyRepo.save(warnerbros);





		};
}

	}
