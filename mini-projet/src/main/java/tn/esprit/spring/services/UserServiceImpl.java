package tn.esprit.spring.services;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.User;
import tn.esprit.spring.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	private final Path root = Paths.get("D:/CSAProjects/Integration3/miniProjet4twin/miniprojet4/src/assets/img/UserPictures");
	//private final Path root = Paths.get("C:/Users/votre/OneDrive/Bureau/4twin/integration projet/miniProjet4twin/miniprojet4/src/assets/img/UserPictures");
	  
	@Override
	public List<User> retrieveAllUsers() {
		List l = new ArrayList<>();
		userRepository.findAll().forEach(l::add);
		return l;
	}

	@Override
	public User addUser(User u) {
		userRepository.save(u);
		return u;
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
		
	}

	@Override
	public User updateUser(User u) {
		if (userRepository.existsById(u.getIdUser()))
		{
			userRepository.save(u);
			return u;
		}
		return null;
	}

	@Override
	public User retrieveUser(Long id) {
		return userRepository.findById(id).get();
	}
	
	public String doHashing(String psw) {	
		try {
			MessageDigest messageDigest = MessageDigest.getInstance("MD5");
			messageDigest.update(psw.getBytes());
			byte[] resultByte = messageDigest.digest();
			StringBuilder sb = new StringBuilder();
			for(byte b : resultByte) {
				sb.append(String.format("%02x", b));			
			}
			return sb.toString();
			
		} catch (NoSuchAlgorithmException e) {
			return e.getMessage();
		}
		
	}

	@Override
	public void saveImage(MultipartFile file) {
		try {
				
		       Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
		      
		    } catch (Exception e) {
		      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		    }
		
	}
	
	


}
