package tn.esprit.spring.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.NoteProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.repositories.NoteProduitRepository;
import tn.esprit.spring.repositories.ProduitRepository;
import tn.esprit.spring.repositories.UserRepository;

@Service
public class NoteProduitServiceImpl implements NoteProduitService {

	@Autowired
	NoteProduitRepository noteProduitRep;
	@Autowired
	UserRepository ur;
	@Autowired
	ProduitRepository pr;
	@Override
	public NoteProduit getNotesProductByUser(long userId,long idProduit) {
	    NoteProduit n=new NoteProduit(0,ur.findById(userId).get(),null);
		List<NoteProduit> l = new ArrayList<>();
		
		for (NoteProduit a :(List<NoteProduit>)noteProduitRep.findAll()  ) {
			if(a.getProduit().getIdProduit()==idProduit) {
				if(a.getUser().getIdUser()==userId) {
					n=a;
				}
			}
	   }
		 return n;
	}

	@Override
	public NoteProduit addNoteProduit(NoteProduit np) {
		return noteProduitRep.save(np);
	}

	@Override
	public NoteProduit retrieveNoteProduit(Long id) {
		return noteProduitRep.findById(id).get();
	}

	@Override
	public void deleteNoteProduit(Long id) {
		noteProduitRep.deleteById(id);
	}

	@Override
	public float getNotesProductByIdProduct(long idproduit) {
		
	try {
	return noteProduitRep.getNotesProductByIdProduct(idproduit);
	}catch (Exception e) {
		return 0;
	}

	}
}
