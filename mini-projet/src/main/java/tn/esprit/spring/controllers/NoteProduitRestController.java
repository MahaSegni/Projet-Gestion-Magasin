package tn.esprit.spring.controllers;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entities.NoteProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.services.NoteProduitService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/noteProduct")
public class NoteProduitRestController {

	@Autowired
	NoteProduitService noteProduitService;
	
	// http://localhost:8081/SpringMVC/noteProduct/retrieve-note-product-byuser/{user-id}
	/*		@GetMapping("/retrieve-note-product-byuser/{user-id}")
		@ResponseBody
	public note getNotesProductByUser(@PathVariable("user-id") Long id) {
			return noteProduitService.getNotesProductByUser(id);
		}
	*/
		// http://localhost:8081/SpringMVC/noteProduct/retrieve-note-product/2
		@GetMapping("/retrieve-note-product/{note-product-id}")
		@ResponseBody
		public NoteProduit retrieveNoteProduct(@PathVariable("note-product-id") Long id) {
			return noteProduitService.retrieveNoteProduit(id);
		}

		// http://localhost:8081/SpringMVC/noteProduct/add-note-product
		@PostMapping("/add-note-product")
		@ResponseBody
		public NoteProduit addNoteProduct(@RequestBody NoteProduit np) {
			System.out.print(np);
			return noteProduitService.addNoteProduit(np);
		}
		// http://localhost:8081/SpringMVC/noteProduct/remove-note-product/{note-product-id}
		@DeleteMapping("/remove-note-product/{note-product-id}")
		@ResponseBody
		public void removeNoteProduct(@PathVariable("note-product-id") Long id) {
			noteProduitService.deleteNoteProduit(id);
		}

}
