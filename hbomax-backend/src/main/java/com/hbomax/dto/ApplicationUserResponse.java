package com.hbomax.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hbomax.models.Profile;
import com.hbomax.models.Role;
import jakarta.persistence.*;

import java.util.Set;

public record ApplicationUserResponse (
    Integer userId,
    String firstName,
    String lastName,
    String email,
    String username
){
}
