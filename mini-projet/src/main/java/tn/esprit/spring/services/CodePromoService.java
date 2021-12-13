package tn.esprit.spring.services;

import java.util.List;

import tn.esprit.spring.entities.CodePromo;

public interface CodePromoService {
	public List<CodePromo> retrieveAllCodePromo();
	public CodePromo addCodePromo(CodePromo c);
	public CodePromo retrieveCodePromo(Long id);
	public CodePromo updateCodePromo(CodePromo u);
	public List<CodePromo> deleteCodePromo(Long id);
	void affecterCodePromoToUser(long idUser, String rech);
}
