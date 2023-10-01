package com.authorization.authorizartionapp.models.service;

import com.authorization.authorizartionapp.models.entity.Cliente;

import java.util.Optional;

public interface IClienteService {

    public Cliente findByEmailCliente(String email) ;

    public Cliente create(Cliente cliente);

    public Optional<Cliente> finfById(Long id);

}
