package tn.esprit.spring.repositories;

import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import tn.esprit.spring.entities.NoteProduit;

public interface NoteProduitRepository extends CrudRepository<NoteProduit, Long>{

	@Query("select AVG(noteproduit) from NoteProduit np where (np.produit.idProduit=:idproduit) ")
	float getNotesProductByIdProduct(@Param("idproduit")long idproduit);
}
