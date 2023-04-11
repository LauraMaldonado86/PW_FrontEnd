/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.miportfolio.maldonado.Security.Service;

import com.miportfolio.maldonado.Security.Entity.Usuario;
import com.miportfolio.maldonado.Security.Repository.iUsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    iUsuarioRepository iusuarioRepository;
    
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return iusuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreUsuario(String nombreUsuario){
        return iusuarioRepository.existByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreEmail(String email){
        return iusuarioRepository.existByEmail(email);
    }
    
    public void save(Usuario usuario){
        iusuarioRepository.save(usuario);
    }

    public boolean existsByEmail(String email) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
