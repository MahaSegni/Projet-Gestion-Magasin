package tn.esprit.spring.repositories;

import org.springframework.data.repository.CrudRepository;

import tn.esprit.spring.entities.Produit;

public interface ProduitRepository extends CrudRepository<Produit, Long> {


}
