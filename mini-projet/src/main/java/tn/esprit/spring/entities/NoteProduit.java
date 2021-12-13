package tn.esprit.spring.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

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
public class NoteProduit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idNote;
	private float noteproduit;
	@ManyToOne()
	User user;
	@ManyToOne()
	Produit produit;
	@Override
	public String toString() {
		return "NoteProduit [idNote=" + idNote + ", noteproduit=" + noteproduit + "]";
	}
	public NoteProduit(float noteproduit, User user, Produit produit) {
		super();
		this.noteproduit = noteproduit;
		this.user = user;
		this.produit = produit;
	}
	
	
}
