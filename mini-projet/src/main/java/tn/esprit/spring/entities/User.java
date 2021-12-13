package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idUser;
	private String 	nom;
	private String 	prenom;
	private Date dateNaissance;
	private String email;
	private String password;
	private String urlpicture;
	private String token;
	
	@Enumerated(EnumType.STRING)
	Badge badge;
    
	private boolean promoActive;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE) 
	@JsonIgnore
	List<Facture> factures = new ArrayList<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<LikeDislike> likedislike = new ArrayList<>();
	
	@ManyToOne()
	CodePromo codepromo;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE) 
	@JsonIgnore
	List<NoteProduit> notes = new ArrayList<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE) 
	@JsonIgnore
	List<ReponseReclamation> reponses = new ArrayList<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE,fetch=FetchType.EAGER) 
	@JsonIgnore
	List<Reclamation> reclamations = new ArrayList<>();

	public User(long idClient) {
		super();
		this.idUser = idClient;
	}

	public User(long idUser, String nom, String prenom, Date dateNaissance, String email, String password,
			Badge badge) {
		super();
		this.idUser = idUser;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.email = email;
		this.password = password;
		this.badge = badge;

	}

	@Override
	public String toString() {
		return "User [idUser=" + idUser + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance="
				+ dateNaissance + ", email=" + email + ", password=" + password + ", badge =" + badge
				+ "]";
	}
	
}
