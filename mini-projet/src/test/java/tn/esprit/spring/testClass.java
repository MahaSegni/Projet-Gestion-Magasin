package tn.esprit.spring;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.entities.Badge;
import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.entities.User;
import tn.esprit.spring.repositories.CodePromoRepository;
import tn.esprit.spring.repositories.UserRepository;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class testClass {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CodePromoRepository codepromorepo;
	
/*	@Ignore
	@Test
	public void addProduit() throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = dateFormat.parse("12/06/2018");
		User u = new User(0,"testnom","testprenom",date,"testemail","testpwd",Badge.Fidele,false,null,null,codepromorepo.findById(1L).get(),null);
		userRepository.save(u);
	}
	
	@Ignore
	@Test
	public void codepromo() throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = dateFormat.parse("12/06/2018");
		CodePromo c = new CodePromo(0,"123",20,date,null);
		codepromorepo.save(c);
	}
	
	@Test
	public void deleteCodepromo() {
		CodePromo codePromo = codepromorepo.findById(1L).get();
		for(int i=0; i<	codePromo.getUsers().size();i++) {
			codePromo.getUsers().get(i).setCodepromo(null);
			codePromo.getUsers().get(i).setPromoActive(false);
			userRepository.save(codePromo.getUsers().get(i));
		}
		codepromorepo.deleteById(1L);
	
	}
*/
}
