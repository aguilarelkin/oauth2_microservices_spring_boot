package com.security.react.app.models.service;

import com.security.react.app.models.dao.IClienteDao;
import com.security.react.app.models.entity.Cliente;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImpl implements UserDetailsService {

    private Logger logger= LoggerFactory.getLogger(UsuarioServiceImpl.class);

    @Autowired
    private IClienteDao usuarioDao;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Cliente usuario = usuarioDao.findByEmail(username);

        if (usuario == null){
            logger.error("Error en el login: no existe el usuario en el sistema!");
            throw new UsernameNotFoundException("Error en el login: no existe el usuario en el sistema!");
        }

        List<GrantedAuthority> authorities = usuario.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getNombre()))
                .peek(authority ->logger.info("Role: "+authority.getAuthority()))
                .collect(Collectors.toList());

        return new User(usuario.getEmail(),usuario.getPassword(),usuario.getEnable(),true,true,true,authorities);
    }
}
