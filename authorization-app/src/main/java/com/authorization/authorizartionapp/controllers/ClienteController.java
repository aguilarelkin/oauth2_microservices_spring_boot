package com.authorization.authorizartionapp.controllers;

import com.authorization.authorizartionapp.models.entity.Cliente;
import com.authorization.authorizartionapp.models.entity.Role;
import com.authorization.authorizartionapp.models.service.IClienteService;
import com.authorization.authorizartionapp.models.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/cliente")
public class ClienteController {

    @Autowired
    private IRoleService roleService;
    @Autowired
    private IClienteService clienteService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getCliente(@PathVariable Long id) {

        Map<String, Object> response = new HashMap<>();
        Optional<Cliente> cliente;
        try {
            cliente = clienteService.finfById(id);

            response.put("mensaje", "Cliente ha sido encontrado con éxito!");
            response.put("cliente", cliente);

        } catch (DataAccessException e) {
            response.put("mensaje", "Error el cliente no esta disponible");

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }


        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }

    @PostMapping("/post")
    public ResponseEntity<?> createCliente(@Valid @RequestBody Cliente cliente, BindingResult result) {
        Cliente clienteCreate = new Cliente();
        Role role;
        Map<String, Object> response = new HashMap<>();

        if (result.hasErrors()) {

            List<String> errors = result.getFieldErrors()
                    .stream()
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());

            response.put("errors", errors);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }
        try {

            Cliente existCliente = clienteService.findByEmailCliente((cliente.getEmail()));

            if (existCliente == null) {
               for (int i = 0; i < cliente.getRoles().size(); i++) {
                    role = roleService.findRole(cliente.getRoles().get(i).getId());
                    clienteCreate.addRole(role);
                }

                cliente.setPassword(passwordEncoder.encode(cliente.getPassword()));

                cliente.setRoles(clienteCreate.getRoles());
                clienteCreate = clienteService.create(cliente);


                response.put("mensaje", "El producto ha sido creado con éxito!");
                response.put("cliente", clienteCreate);
            } else {
                response.put("mensaje", "El cliente ya esta registrado");
                response.put("cliente", clienteCreate);
            }


        } catch (DataAccessException e) {
            response.put("mensaje", "Error al realizar el insert en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }


        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

}
