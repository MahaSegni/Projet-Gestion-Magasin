package tn.esprit.spring.services;

import java.util.List;


import tn.esprit.spring.entities.ReponseReclamation;

public interface ReponseReclamationService {
	public List<ReponseReclamation> retrieveAllReponsesReclamation();
	public ReponseReclamation addReponseReclamation(ReponseReclamation r);
	public ReponseReclamation retrieveReponseReclamation(Long id);
	public ReponseReclamation updateReponseReclamation(ReponseReclamation r);
	public void deleteReponseReclamation(Long id);
}
