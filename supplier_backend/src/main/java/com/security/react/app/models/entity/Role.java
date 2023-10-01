package com.security.react.app.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role /*implements GrantedAuthority*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(unique = true, length = 20)
  /*  @Enumerated(EnumType.STRING)*/
    private String nombre;

/*
    @Override
    public String getAuthority() {
        return nombre.name();
    }*/
}