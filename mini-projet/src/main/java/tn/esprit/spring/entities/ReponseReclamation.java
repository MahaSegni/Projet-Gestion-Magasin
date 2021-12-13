package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
public class ReponseReclamation implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idReponseReclamation;
	private String reponse;
	private String imageReponseReclamation;
	@Temporal(TemporalType.DATE)
	private Date dateReponseReclamation;
	@Column(nullable=true)
	private long numreclamation;
	@ManyToOne()
	User user;
	@ManyToOne()
	Reclamation reclamation;
	
	@Override
	public String toString() {
		return "ReponseReclamation [idReponseReclamation=" + idReponseReclamation + ", reponse=" + reponse
				+ ", imageReponseReclamation=" + imageReponseReclamation + ", dateReponseReclamation="
				+ dateReponseReclamation +    ", reclamation=" + reclamation.toString() + "]";
	}
	
}
