package tn.esprit.spring.services;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.Produit;

public interface ProduitService  {
	public List<Produit> retrieveAllProduits();
	public Produit addProduit(Produit p);
	public Produit retrieveProduit(Long id);
	public void deleteProduit(Long id);
	public Produit updateProduit(Produit u);
	public void saveImage(MultipartFile file);
}
