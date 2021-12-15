package tn.esprit.spring.services;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.CategorieProduit;
import tn.esprit.spring.entities.Produit;

import tn.esprit.spring.repositories.CategorieProduitRepository;

import tn.esprit.spring.repositories.ProduitRepository;

@Service
public class ProduitServiceImpl implements ProduitService {
	private final Path root = Paths.get("D:/CSAProjects/Integration3/miniProjet4twin/miniprojet4/src/assets/img/ProductPic");
	

    @Autowired 
	ProduitRepository produitrepository;
    @Autowired 
	CategorieProduitRepository categorieRep;
 
	@Override
	public List<Produit> retrieveAllProduits() {
		return (List<Produit>)produitrepository.findAll();
	}

	@Override
	public Produit addProduit(Produit p) {

		produitrepository.save(p);
		return p;
	}

	@Override
	public Produit retrieveProduit(Long id) {
		return produitrepository.findById(id).get();
	}

	@Override
	public void deleteProduit(Long id) {
		produitrepository.deleteById(id);
	}

	@Override
	public Produit updateProduit(Produit u) {
		 produitrepository.save(u);
		return u;
		}


	//private final Path root = Paths.get("C:/Users/votre/OneDrive/Bureau/4twin/integration projet/miniProjet4twin/miniprojet4/src/assets/img/ProductPic");
	  @Override
	  public void saveImage(MultipartFile  file) {
	    try {
	       Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
	    } catch (Exception e) {
	      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
	    }
	  }
	



}
