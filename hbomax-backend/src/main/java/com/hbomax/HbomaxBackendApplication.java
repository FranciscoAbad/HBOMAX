package com.hbomax;

import com.hbomax.config.RSAKeyProperties;
import com.hbomax.models.ApplicationUser;
import com.hbomax.models.Role;
import com.hbomax.repositories.RoleRepository;
import com.hbomax.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;
@EnableConfigurationProperties(RSAKeyProperties.class)
@SpringBootApplication
public class HbomaxBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HbomaxBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepo, UserRepository userRepo, PasswordEncoder passwordEncoder){
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








		};
}

	}
