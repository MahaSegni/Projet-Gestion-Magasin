package tn.esprit.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import tn.esprit.spring.services.EmailSender;

@SpringBootApplication
public class MiniProjetApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(MiniProjetApplication.class, args);
		
	}
	

}
