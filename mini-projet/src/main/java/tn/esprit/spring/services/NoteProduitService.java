package tn.esprit.spring.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.NoteProduit;

public interface NoteProduitService {
	public NoteProduit getNotesProductByUser(long id,long idproduit );
	public float getNotesProductByIdProduct(long id);
	public NoteProduit addNoteProduit(NoteProduit np);
	public NoteProduit retrieveNoteProduit(Long id);
	public void deleteNoteProduit(Long id);

}
