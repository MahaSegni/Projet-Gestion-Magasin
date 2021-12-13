package tn.esprit.spring.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
public class CodePromo implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idCodePromo;
	private String cle;
	private double valeur;
	private Date dateFin;
	
	@OneToMany(mappedBy = "codepromo",fetch=FetchType.EAGER)
	@JsonIgnore
	List<User> users = new ArrayList<>();

	@Override
	public String toString() {
		return "CodePromo [idCodePomo=" + idCodePromo + ", cle=" + cle + ", valeur=" + valeur + ", dateFin=" + dateFin
				+ "]";
	}

}
