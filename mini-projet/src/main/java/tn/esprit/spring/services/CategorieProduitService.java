package tn.esprit.spring.services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import tn.esprit.spring.entities.CategorieProduit;


public interface CategorieProduitService {
	public List<CategorieProduit> retrieveAllCategorieProduits();
	public CategorieProduit addCategorieProduit(CategorieProduit c);
	public CategorieProduit retrieveCategorieProduit(Long id);
	public CategorieProduit updateCategorieProduit(CategorieProduit u);
	public List<CategorieProduit> deleteCategorieProduit(Long id);
	

}
