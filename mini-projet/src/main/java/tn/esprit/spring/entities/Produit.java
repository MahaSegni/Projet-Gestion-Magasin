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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

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
	@Temporal(TemporalType.DATE)
	private Date dateCreation;
	@Temporal(TemporalType.DATE)
	private Date dateDerniereModification;
	private double prixUnitaire;
	private String imageProduit;
	private long quantiteEnStock;
	private double pourcentageRemise;
	@Transient
	private NoteProduit note;
	@Transient
	private float moyenneNote;

	private boolean valeur;
	@ManyToOne()
	CategorieProduit categorieProduit;
	
	@OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<detailFacture> detailF = new ArrayList<>();
	
	@OneToMany(mappedBy = "produit", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<LikeDislike> likedislike = new ArrayList<>();
    
    @OneToMany(mappedBy="produit",cascade = CascadeType.REMOVE)
	@JsonIgnore
    List<NoteProduit> notesProduit = new ArrayList<>();
   
    @ManyToMany()
    @JoinTable(name = "FournisseurProduit")
    List<Fournisseur> fournisseurs = new ArrayList<>();
    
    @Override
	public String toString() {
		return "Produit [idProduit=" + idProduit + ", code=" + code + ", libelle=" + libelle + ", dateCreation="
				+ dateCreation + ", dateDerniereModification=" + dateDerniereModification + ", prixUnitaire="
				+ prixUnitaire + ", image=" + imageProduit + ", quantiteEnStock=" + quantiteEnStock + ", pourcentageRemise="
				+ pourcentageRemise + ", categorieProduit=" + categorieProduit.toString() + "]";
	}
	
	

}
