package tn.esprit.spring.services;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.Reclamation;
import tn.esprit.spring.entities.ReponseReclamation;
import tn.esprit.spring.repositories.ReclamationRepository;
import tn.esprit.spring.repositories.ReponseReclamationRepository;

@Service
public class ReponseReclamationServiceImpl implements ReponseReclamationService{
	@Autowired
	ReponseReclamationRepository reponseReclamationRepository;
	@Autowired
	ReclamationService recservice;
	@Override
	public List<ReponseReclamation> retrieveAllReponsesReclamation() {
		return  (List<ReponseReclamation>) reponseReclamationRepository.findAll();
	}


	@Override
	public ReponseReclamation retrieveReponseReclamation(Long id) {
		return reponseReclamationRepository.findById(id).get();
	}

	@Override
	public ReponseReclamation updateReponseReclamation(ReponseReclamation r) {
		return reponseReclamationRepository.save(r);
	}

	@Override
	public void deleteReponseReclamation(Long id) {
		reponseReclamationRepository.deleteById(id);
	}


	@Override
	public ReponseReclamation addReponseReclamation(ReponseReclamation r) {
	r.setReclamation(recservice.retrieveReclamation(r.getNumreclamation()));
	System.out.print("id reclamation ====" +r.getReclamation().getIdReclamation());
		return reponseReclamationRepository.save(r);
	}


	



}
