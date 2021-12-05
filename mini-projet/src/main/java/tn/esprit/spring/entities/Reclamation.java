package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reclamation implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idReclamation;
	private String objet;
	private String messageReclamation;
	private String imageReclamation;
	@Temporal(TemporalType.DATE)
	private Date dateReclamation;
	private boolean cloture = false;
	
	@ManyToOne()
	User user;
	
	@OneToMany(mappedBy = "reclamation", cascade = CascadeType.REMOVE) 
	@JsonIgnore
	List<ReponseReclamation> reponsesReclamation = new ArrayList<>();

	@Override
	public String toString() {
		String resultat;
		resultat="Reclamation [ \n idReclamation=" + idReclamation + ", objet=" + objet + ", messageReclamation="
				+ messageReclamation + ", imageReclamation=" + imageReclamation + ", dateRreclamation="
				+ dateReclamation + ", cloture=" + cloture + "," +"\n" +"reponsesReclamation=" + "\n" ;
		for (ReponseReclamation r : reponsesReclamation)
		{resultat+=r.toString()+ "\n";}
		resultat += "]";
		return resultat;
				}
	
	

}
