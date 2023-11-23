package com.hbomax.repositories;

import com.hbomax.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PersonRepository extends JpaRepository<Person,Integer> {

    Optional<Person> findByPersonId(Integer personId);

    @Query("SELECT p FROM Person p WHERE p.firstName = :firstName AND p.lastName = :lastName")
    Optional<Person> findByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);

    @Query("SELECT c.person FROM CastInfo c WHERE c.title.title=:titleName")
    Set<Person> findByTitleName(@Param("titleName") String titleName);

    @Query("SELECT c.person FROM CastInfo c WHERE c.title.title=:titleName AND c.role.role=:role")
            Set<Person> findByTitleNameAndRole(@Param("titleName")String titleName,@Param("role") String role);
}
