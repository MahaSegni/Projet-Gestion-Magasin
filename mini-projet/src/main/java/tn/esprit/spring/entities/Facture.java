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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Facture implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idFacture;
	private double montantFacture;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateFacture;
	private Boolean active = false;
	@OneToMany(mappedBy ="facture", cascade = CascadeType.REMOVE)
	@JsonIgnore
	List<detailFacture> detailFacture = new ArrayList<>();
	
	@ManyToOne()
	@JsonIgnore
	User user;

	@Override
	public String toString() {
		return "Facture [idFacture=" + idFacture + ", montantFacture="
				+ montantFacture + ", dateFacture=" + dateFacture + ", active=" + active + "]";
	}
	
	
	

}
