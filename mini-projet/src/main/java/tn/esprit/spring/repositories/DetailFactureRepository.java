package tn.esprit.spring.repositories;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import tn.esprit.spring.entities.detailFacture;

public interface DetailFactureRepository extends CrudRepository<detailFacture,Long> {
	@Transactional
	@Modifying
	@Query(value ="Update detailFacture Set qte=:qte  where (idDetailFacture=:id) ")
	public int updatedetailFactureQuantite (@Param("qte")int qte ,@Param("id")Long id);

}
