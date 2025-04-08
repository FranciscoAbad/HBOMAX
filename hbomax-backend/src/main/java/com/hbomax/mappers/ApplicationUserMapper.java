package com.hbomax.mappers;
import com.hbomax.dto.ApplicationUserResponse;
import com.hbomax.models.ApplicationUser;
import org.springframework.stereotype.Service;

@Service
public class ApplicationUserMapper {
    public ApplicationUserResponse fromApplicationUser(ApplicationUser user) {
        return new ApplicationUserResponse(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getUsername()
        );
    }
}
