package com.hbomax;

import com.hbomax.config.RSAKeyProperties;
import com.hbomax.models.*;
import com.hbomax.repositories.*;
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
	CommandLineRunner run(RoleRepository roleRepo, UserRepository userRepo, PasswordEncoder passwordEncoder, PersonRepository personRepo, TitleRoleRepository titleRoleRepo, GenreRepository genreRepo, CountryRepository countryRepo){
		return args ->{
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
			horror.setGenre("action");
			genreRepo.save(action);

			Genre romance=new Genre();
			horror.setGenre("romance");
			genreRepo.save(romance);

			Country argentina=new Country();
			argentina.setCountry("Argentina");
			countryRepo.save(argentina);

			Country unitedStates=new Country();
			unitedStates.setCountry("United States");
			countryRepo.save(unitedStates);






		};
}

	}
