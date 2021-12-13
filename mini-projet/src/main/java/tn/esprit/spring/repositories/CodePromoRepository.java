package tn.esprit.spring.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entities.CodePromo;
@Repository
public interface CodePromoRepository extends CrudRepository<CodePromo,Long>{

}
