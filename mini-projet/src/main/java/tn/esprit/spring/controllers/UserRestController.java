package tn.esprit.spring.controllers;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.bytebuddy.utility.RandomString;
import tn.esprit.spring.entities.User;
import tn.esprit.spring.services.EmailSender;
import tn.esprit.spring.services.JwtUtils;
import tn.esprit.spring.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserRestController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	EmailSender emailSender;
	
	
	
	@PostMapping("/forgetPassword")
	@ResponseBody
	public boolean updatePswd(@RequestBody User u) {
		List<User> list = userService.retrieveAllUsers();
		for (User u2 : list) {
			if (u2.getEmail().equals(u.getEmail())) {
				String pass = BCrypt.hashpw(u.getPassword(), BCrypt.gensalt());
				u2.setPassword(pass);
				userService.updateUser(u2);
				return true	;
			}
		}
		return false;
		
		
	}
	
	@GetMapping("/verificationmail/{mail}")
	@ResponseBody
	public String sendmail(@PathVariable("mail") String email){
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789"+"abcdefghijklmnopqrstuvxyz";
		StringBuilder sb = new StringBuilder(5);
		for (int i = 0; i < 5; i++) {
		int index = (int)(AlphaNumericString.length()* Math.random());
		sb.append(AlphaNumericString.charAt(index));
		}
		emailSender.sendMail(email, "Verification mail", sb.toString());
		return sb.toString();
	}
	
	
	@GetMapping("/connection/{email}/{psw}")
	@ResponseBody
	public User connectionUser(@PathVariable String email,@PathVariable String psw) {
		List<User> list = userService.retrieveAllUsers();
	
		
		User u = new User();
		for (User u2 : list) {

			if (  (u2.getEmail().equals(email)) && (BCrypt.checkpw(psw, u2.getPassword()))) {
				String generatedT = jwtUtils.generateJwt(u2);
				u = u2;
				u.setToken(generatedT);
				userService.updateUser(u);
			}
		}
		return u;
	}
	
	
	@GetMapping("/retrieve-all-users/{id}")
	@ResponseBody
	public List<User> getAllUsers(@RequestHeader(value = "authorisation", defaultValue = "") String auth,@PathVariable Long id){
		User u = userService.retrieveUser(id);
		if ((u.getToken().equals(auth)) && ((u.getBadge().toString()).equals("Moderateur")))
		{
			return userService.retrieveAllUsers();
		}
		else {
			return null;
		}
	}
	
	@GetMapping("/checkUser/{email}")
	@ResponseBody
	public boolean checkUser(@PathVariable String email) {
		List<User> list = userService.retrieveAllUsers();
		for (User u2 : list) {
			if (u2.getEmail().equals(email)) {
				return true;
			}
		}
		return false;
		
	}
	
	@PostMapping("/add-user")
	@ResponseBody
	public User addUser(@RequestBody User u) {
		String pass = BCrypt.hashpw(u.getPassword(), BCrypt.gensalt());
		u.setPassword(pass);
		u.setUrlpicture("user.png");
		return userService.addUser(u);
	}
	
	@PutMapping("/change-password")
	@ResponseBody
	public User updateUserPassword(@RequestBody User u,@RequestHeader(value = "authorisation", defaultValue = "") String auth) {
		if (userService.retrieveUser(u.getIdUser()).getToken().equals(auth)) {

			String pass = BCrypt.hashpw(u.getPassword(), BCrypt.gensalt());
			u.setPassword(pass);
			return userService.updateUser(u);
		}
		else {
			return null;
		}
	}
	
	@GetMapping("/check-password/{id}/{psw}")
	@ResponseBody
	public boolean checkpsw(@PathVariable Long id,@PathVariable String psw){
		List<User> list = userService.retrieveAllUsers();
		String pass = userService.doHashing(psw);
		
		
		for (User u2 : list) {

			if (  (u2.getIdUser() == id) && (BCrypt.checkpw(psw, u2.getPassword()))) {
				return true;
			}
		}
		return false;
	}
	

	
	@GetMapping("/retrieve-user/{user-id}")
	@ResponseBody
	public User retrieveUser(@RequestHeader(value = "authorisation", defaultValue = "") String auth,@PathVariable("user-id") Long id) {
		
		User u = userService.retrieveUser(id);
		if (u.getToken().equals(auth)) {
			return u;
		}
		else {
			return null;
		}
	}
	
	@DeleteMapping("/remove-user/{user-id}/{admin-id}")
	@ResponseBody
	public void removeUser(@RequestHeader(value = "authorisation", defaultValue = "") String auth,@PathVariable("user-id") Long id,@PathVariable("admin-id") Long aid) {
		User u = userService.retrieveUser(aid);
		if ((u.getToken().equals(auth)) && ((u.getBadge().toString()).equals("Moderateur"))) {
			userService.deleteUser(id);
		}
		
	}
	
	@PutMapping("/modify-user")
	@ResponseBody
	public User updateUser(@RequestBody User u, @RequestHeader(value = "authorisation", defaultValue = "") String auth) {
		if (userService.retrieveUser(u.getIdUser()).getToken().equals(auth)) {
			return userService.updateUser(u);
		}
		else {
			return null;
		}
		
	}
	
	@PostMapping("/uploadImage/{user-id}")
	@ResponseBody
	public User uploadFile(@RequestParam("file") MultipartFile file,@PathVariable("user-id") Long id,@RequestHeader(value = "authorisation", defaultValue = "") String auth) {

		User u = userService.retrieveUser(id);
		if (u.getToken().equals(auth)) {
		u.setUrlpicture(file.getOriginalFilename());
		userService.updateUser(u);
		userService.saveImage(file);
		return u;}
		else
		{
			return null;
		}
	}
	

}
