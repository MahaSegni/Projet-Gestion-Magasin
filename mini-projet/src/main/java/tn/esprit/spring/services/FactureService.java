package tn.esprit.spring.services;

import java.util.List;

import tn.esprit.spring.entities.Facture;;

public interface FactureService {
	public List<Facture> retrieveAllFactures();
	public Facture addFacture(Facture f);
	public void deleteFacture(Long id);
	public Facture updateFacture(Facture f);
	public Facture retrieveFacture(Long id);
}
