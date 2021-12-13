package tn.esprit.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {
	@Autowired
	JavaMailSender mailSender;
	public void sendMail(String to,String subject,String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("m4eshop@gmail.com");
		message.setTo(to);
		message.setSubject(subject);
		message.setText(text);
		
		mailSender.send(message);
		System.out.println("Mail sent");
		
	}
	

}
