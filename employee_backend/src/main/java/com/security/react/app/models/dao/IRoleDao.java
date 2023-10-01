package com.security.react.app.models.dao;

import com.security.react.app.models.entity.Role;
import com.security.react.app.models.enums.RoleNum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRoleDao extends JpaRepository<Role, Long> {

    Optional<Role> findByNombre(RoleNum nombre);
}
