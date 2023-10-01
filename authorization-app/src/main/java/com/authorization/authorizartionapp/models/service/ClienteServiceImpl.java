package com.authorization.authorizartionapp.models.service;

import com.authorization.authorizartionapp.models.dao.IClienteDao;
import com.authorization.authorizartionapp.models.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClienteServiceImpl implements IClienteService {

    @Autowired
    private IClienteDao clienteDao;

    @Override
    public Cliente findByEmailCliente(String email) {
        return clienteDao.findByEmail(email);
    }

    @Override
    public Cliente create(Cliente cliente) {
        return clienteDao.save(cliente);
    }

    @Override
    public Optional<Cliente> finfById(Long id) {
        return clienteDao.findById(id);
    }

}
