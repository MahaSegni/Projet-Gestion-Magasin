package tn.esprit.spring.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.Facture;
import tn.esprit.spring.repositories.FactureRepository;

@Service
public class FactureServiceImpl implements FactureService{
	@Autowired
	FactureRepository factureRepository;
	
	@Override
	public List<Facture> retrieveAllFactures() {
		return (List<Facture>)factureRepository.findAll();	
	}

	@Override
	public Facture addFacture(Facture f) {
		factureRepository.save(f);
		return f;
	}

	@Override
	public void deleteFacture(Long id) {
		Facture f = new Facture ();
		f.setIdFacture(id);
		factureRepository.delete(f);	
		
	}

	@Override
	public Facture updateFacture(Facture f) {
		factureRepository.save(f);
		return f;
	}

	@Override
	public Facture retrieveFacture(Long id) {
		return factureRepository.findById(id).get();
	}
	
	

}
