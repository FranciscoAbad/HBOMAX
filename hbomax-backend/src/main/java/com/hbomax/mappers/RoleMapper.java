package com.hbomax.mappers;

import com.hbomax.dto.RoleResponse;
import com.hbomax.models.Role;
import org.springframework.stereotype.Service;

@Service
public class RoleMapper {
    public RoleResponse fromRole(Role role) {
        return new RoleResponse(
                role.getRoleId(),
                role.getAuthority()
        );
    }
}
