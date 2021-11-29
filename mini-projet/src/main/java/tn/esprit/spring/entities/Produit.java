package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
public class Produit implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idProduit;
	private String code;
	private String libelle;
	private Date dateCreation;
	private Date dateDerniereModification;
	private double prixUnitaire;
	private String rayon;
	private String image;
	private long quantiteEnStock;
	private double pourcentageRemise;
	
	
	@ManyToOne()
	CategorieProduit categorieProduit;
	
	@OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<detailFacture> detailF = new ArrayList<>();
	
	@OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
	List<LikeDislike> likedislike = new ArrayList<>();
    
    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name = "FournisseurProduit")
    List<Fournisseur> fournisseurs = new ArrayList<>();

}
