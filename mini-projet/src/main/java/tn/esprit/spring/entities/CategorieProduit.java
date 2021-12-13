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
import javax.persistence.OneToMany;

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
public class CategorieProduit implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idCategorieProduit;
	private String libelle;
	private String categorieProduitIcone;
    
    
	@OneToMany(mappedBy="categorieProduit",cascade = CascadeType.REMOVE,fetch= FetchType.EAGER)
	@JsonIgnore
	private List<Produit> produits=new ArrayList<>();

	@Override
	public String toString() {
		String resultat ;
		resultat = "CategorieProduit [idCategorieProduit=" + idCategorieProduit + ", libelle=" + libelle + ", produits=";
		for(Produit p: produits)
		{resultat += p.toString();}
		resultat =resultat + "]";
		return resultat ;
	}

}
