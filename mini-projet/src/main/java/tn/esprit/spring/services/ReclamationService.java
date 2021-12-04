package tn.esprit.spring.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.Reclamation;

public interface ReclamationService {
	public List<Reclamation> retrieveAllReclamations();
	public Reclamation addReclamation(Reclamation r);
	public Reclamation retrieveReclamation(Long id);
	public Reclamation updateReclamation(Reclamation r);
	public void deleteReclamation(Long id);

	  public void saveImage(MultipartFile file);


}
