package tn.esprit.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.entities.NoteProduit;
import tn.esprit.spring.entities.User;
import tn.esprit.spring.repositories.CodePromoRepository;
import tn.esprit.spring.repositories.UserRepository;
@Service
public class CodePromoServiceImp implements CodePromoService {
	@Autowired
	CodePromoRepository codepromorepo;
	@Autowired
	UserRepository userRepository;
	@Override
	public List<CodePromo> retrieveAllCodePromo() {
		return (List<CodePromo>) codepromorepo.findAll();
	}

	@Override
	public CodePromo addCodePromo(CodePromo c) {
		codepromorepo.save(c);
		return c;
	}

	@Override
	public CodePromo retrieveCodePromo(Long id) {
		return  codepromorepo.findById(id).get();
	}

	@Override
	public CodePromo updateCodePromo(CodePromo u) {
		codepromorepo.save(u);
		return u;
	}

	@Override
	public List<CodePromo> deleteCodePromo(Long id) {
		
		CodePromo codePromo = codepromorepo.findById(id).get();
		for(int i=0; i<	codePromo.getUsers().size();i++) {
			codePromo.getUsers().get(i).setCodepromo(null);
			codePromo.getUsers().get(i).setPromoActive(false);
			userRepository.save(codePromo.getUsers().get(i));
		}
		codepromorepo.deleteById(id);
		return (List<CodePromo>) codepromorepo.findAll();
	}
	@Override
	public void affecterCodePromoToUser(long idUser,String rech) {
		User u= userRepository.findById(idUser).get();
		List<CodePromo> c= (List<CodePromo>) codepromorepo.findAll();
		for(int i=0; i<	c.size();i++) {
			if(c.get(i).getCle().compareTo(rech)==0 ) {
				if(u.getCodepromo()==null) {
				u.setCodepromo(c.get(i));
				u.setPromoActive(true);
				userRepository.save(u);
				}
		
			}
		}
		
	}
	

}
