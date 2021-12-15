package tn.esprit.spring;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.event.EventListener;
import org.springframework.test.context.junit4.SpringRunner;

import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.entities.Badge;
import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.entities.Facture;
import tn.esprit.spring.entities.User;
import tn.esprit.spring.repositories.CodePromoRepository;
import tn.esprit.spring.repositories.FactureRepository;
import tn.esprit.spring.repositories.UserRepository;
import tn.esprit.spring.services.EmailSender;
import tn.esprit.spring.services.UserService;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class testClass {
	@Autowired
	UserRepository userRepository;
	@Autowired
	EmailSender emailSender;
	@Autowired
	CodePromoRepository codepromorepo;
	@Autowired
	UserService userService;
	@Autowired
	FactureRepository fs;
	
	//@Ignore
	@Test
	public void addUser() throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = dateFormat.parse("12/06/2018");
		String psw = BCrypt.hashpw("1234", BCrypt.gensalt());
		User u = new User(9L,"testnom","testprenom",date,"med@mod",psw,"user.png",null,Badge.Moderateur,false,null,null,null,null,null,null);
		userRepository.save(u);
		//User u1 = new User(2,"testnom","testprenom",date,"maha@mod",psw,"user.png",null,Badge.Fidele,false,null,null,null,null,null,null);
		//userRepository.save(u1);
	}
	@Ignore
	@Test
	public void addFacture() throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = dateFormat.parse("30/09/2019");
		Facture f = new Facture(0,22,date,true,null,userService.retrieveUser(13L));
		fs.save(f);
	}
	
	@Ignore
	@Test
	public void codepromo() throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = dateFormat.parse("12/06/2018");
		CodePromo c = new CodePromo(0,"123",20,date,null);
		codepromorepo.save(c);
	}
	@Ignore
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
	
	

}
