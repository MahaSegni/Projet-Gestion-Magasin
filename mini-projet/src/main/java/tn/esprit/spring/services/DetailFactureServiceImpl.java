package tn.esprit.spring.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.detailFacture;
import tn.esprit.spring.repositories.DetailFactureRepository;

@Service
public class DetailFactureServiceImpl implements DetailFactureService{
	@Autowired
	DetailFactureRepository detailFactureRepository;
	
	@Override
	public List<detailFacture> retrieveAlldetailFactures() {
		return (List<detailFacture>)detailFactureRepository.findAll();
		
	}

	@Override
	public detailFacture adddetailFacture(detailFacture f) {
		detailFactureRepository.save(f);
		return f;
	}

	@Override
	public void deletedetailFacture(Long id) {
		detailFacture f = new detailFacture ();
		f.setIdDetailFacture(id);
		detailFactureRepository.delete(f);	
		
	}

	@Override
	public detailFacture updatedetailFacture(detailFacture f) {
		detailFactureRepository.save(f);
		return f;
	}

	@Override
	public detailFacture retrievedetailFacture(Long id) {
		return detailFactureRepository.findById(id).get();
	}

	@Override
	public int updatedetailFactureQuantite(detailFacture df) {
        return detailFactureRepository.updatedetailFactureQuantite(df.getQte(), df.getIdDetailFacture());

	}

	
	
	

}