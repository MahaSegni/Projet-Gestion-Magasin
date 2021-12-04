package tn.esprit.spring.controllers;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import tn.esprit.spring.entities.CategorieProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.entities.Reclamation;
import tn.esprit.spring.services.CategorieProduitService;
import tn.esprit.spring.services.ReclamationService;

    @Slf4j
	@RestController
	@RequestMapping("/reclamation")
	@CrossOrigin(origins = "*")
	//@ComponentScan(basePackages= {"tn.esprit.spring.services"})

	public class ReclamationRestController {

		@Autowired
		ReclamationService reclamationService;

		// http://localhost:8081/SpringMVC/reclamation/retrieve-all-reclamations
		@GetMapping("/retrieve-all-reclamations")
		@ResponseBody
		public List<Reclamation> getReclamations() {
			return reclamationService.retrieveAllReclamations();
		}
		// http://localhost:8081/SpringMVC/reclamation/retrieve-reclamation/1
		@GetMapping("/retrieve-reclamation/{reclamation-id}")
		@ResponseBody
		public Reclamation retrieveReclamation(@PathVariable("reclamation-id") Long id) {
			return reclamationService.retrieveReclamation(id);
		}

		// http://localhost:8081/SpringMVC/reclamation/add-reclamation
		@PostMapping("/add-reclamation")
		@ResponseBody
		public Reclamation addProductCategory(@RequestBody Reclamation c) {
			return reclamationService.addReclamation(c);
		}
		// http://localhost:8081/SpringMVC/reclamation/remove-reclamation/{reclamation-id}
		@DeleteMapping("/remove-reclamation/{reclamation-id}")
		@ResponseBody
		public void removeReclamation(@PathVariable("reclamation-id") Long id) {
			reclamationService.deleteReclamation(id);
		}

		// http://localhost:8081/SpringMVC/reclamation/modify-reclamation
		@PutMapping("/modify-reclamation")
		@ResponseBody
		public Reclamation modifyReclamation(@RequestBody Reclamation r) {
			return reclamationService.updateReclamation(r);
		}
		// http://localhost:8081/SpringMVC/reclamation/retrieve-all-reclamationsByUser/{user-id}
		@GetMapping("/retrieve-all-reclamationsByUser/{user-id}")
		@ResponseBody
	    public List<Reclamation> getReclamationsByUser(@PathVariable("user-id") Long id) {
			List<Reclamation> r =  reclamationService.retrieveAllReclamations();
			List<Reclamation> ru =new ArrayList<>();
			
			for (Reclamation re : r) {
				if (re.getUser().getIdUser()==id) {
					ru.add(re);
				}
			}
	
			return ru ;
		}
		
		//http://localhost:8081/SpringMVC/reclamation/uploadImage
		@PostMapping("/uploadImage")
		  public void uploadFile(@RequestParam("file") MultipartFile file) {
		    String message = "";
		    try {
		      reclamationService.saveImage(file);   
		    System.out.print( message = "Uploaded the file successfully: " + file.getOriginalFilename());
		    } catch (Exception e) {
		    	
		    	System.out.print(  message = "Could not upload the file: " + file.getOriginalFilename() + "!");
		    }
		}
}

