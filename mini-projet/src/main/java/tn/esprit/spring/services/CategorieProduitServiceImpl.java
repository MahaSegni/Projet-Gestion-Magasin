package tn.esprit.spring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.CategorieProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.repositories.CategorieProduitRepository;
import tn.esprit.spring.repositories.ProduitRepository;

@Service
public class CategorieProduitServiceImpl implements CategorieProduitService {

	@Autowired
	CategorieProduitRepository categorieRep;

	@Override
	public List<CategorieProduit> retrieveAllCategorieProduits() {
		return (List<CategorieProduit>) categorieRep.findAll();
	}

	@Override
	public CategorieProduit addCategorieProduit(CategorieProduit c) {
		categorieRep.save(c);
		return c;

	}

	@Override
	public CategorieProduit retrieveCategorieProduit(Long id) {
		return  categorieRep.findById(id).get();
		
	}

	@Override
	public CategorieProduit updateCategorieProduit(CategorieProduit u) {
		categorieRep.save(u);
		return u;
	}

	@Override
	public List<CategorieProduit> deleteCategorieProduit(Long id) {
		categorieRep.deleteById(id);
		return (List<CategorieProduit>) categorieRep.findAll();
	}

}
