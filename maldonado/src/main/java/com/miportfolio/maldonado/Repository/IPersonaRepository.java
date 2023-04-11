
package com.miportfolio.maldonado.Repository;

import com.miportfolio.maldonado.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
