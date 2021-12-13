package tn.esprit.spring.services;

import java.util.List;

import tn.esprit.spring.entities.detailFacture;

public interface DetailFactureService {
	public List<detailFacture> retrieveAlldetailFactures();
	public detailFacture adddetailFacture(detailFacture df);
	public void deletedetailFacture(Long id);
	public detailFacture updatedetailFacture(detailFacture df);
	public detailFacture retrievedetailFacture(Long id);
	public int updatedetailFactureQuantite(detailFacture df);
}
