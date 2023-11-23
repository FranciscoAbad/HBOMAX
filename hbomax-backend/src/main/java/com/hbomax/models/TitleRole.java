package com.hbomax.models;

import jakarta.persistence.*;

@Entity
@Table(name="title_role")
public class TitleRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="role_id")
    private Integer roleId;
    @Column(name="role")
    private String role;

    public TitleRole(Integer roleId, String role) {
        this.roleId = roleId;
        this.role = role;
    }

    public TitleRole(){
        super();
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
