package tn.esprit.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import tn.esprit.spring.entities.CategorieProduit;
import tn.esprit.spring.entities.Reclamation;
import tn.esprit.spring.repositories.CategorieProduitRepository;
import tn.esprit.spring.repositories.ReclamationRepository;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ReclamationServiceImpl implements ReclamationService{

	private final Path root = Paths.get("D:/CSAProjects/Integration3/miniProjet4twin/miniprojet4/src/assets/img/ReclamationPic");

	@Autowired
	ReclamationRepository reclamationRepository;
	@Override
	public List<Reclamation> retrieveAllReclamations() {
		return  (List<Reclamation>) reclamationRepository.findAll();
	}

	@Override
	public Reclamation addReclamation(Reclamation r) {
		reclamationRepository.save(r);
		return r;
	}

	@Override
	public Reclamation retrieveReclamation(Long id) {
		return reclamationRepository.findById(id).get();
	}

	@Override
	public Reclamation updateReclamation(Reclamation r) {
		reclamationRepository.save(r);		
		return r;
	}

	@Override
	public void deleteReclamation(Long id) {
		reclamationRepository.deleteById(id);
	}


	 // private final Path root = Paths.get("C:/Users/votre/OneDrive/Bureau/4twin/integration projet/miniProjet4twin/miniprojet4/src/assets/img/ReclamationPic");
	  @Override
	  public void saveImage(MultipartFile  file) {
	    try {
	       Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
	    } catch (Exception e) {
	      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
	    }
	  }
}
