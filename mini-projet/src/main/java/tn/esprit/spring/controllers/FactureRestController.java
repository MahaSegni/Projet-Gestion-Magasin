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

import tn.esprit.spring.entities.Facture;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.services.FactureService;
@CrossOrigin("*")
@RestController
@RequestMapping("/Facture")

public class FactureRestController {
	@Autowired
	FactureService FactureService ;
	//http://localhost:8081/SpringMVC/Facture/retrieve-all-Factures
	@GetMapping("/retrieve-all-Factures")
	@ResponseBody
	public List<Facture> getFactures() {
	List<Facture> listFacture = FactureService.retrieveAllFactures();
	return listFacture;
	}
	//http://localhost:8081/SpringMVC/Facture/retrieve/{facture-id}
		@GetMapping("/retrieve/{facture-id}")
		@ResponseBody
		public Facture getFacture(@PathVariable("facture-id")Long factureId) {
		Facture f = FactureService.retrieveFacture(factureId);
		return f;
		}
		//http://localhost:8081/SpringMVC/Facture/add-facture

		@PostMapping("/add-facture")
		@ResponseBody
		public Facture addFacture(@RequestBody Facture f) {
			return FactureService.addFacture(f);
		}
	//http://localhost:8081/SpringMVC/Facture/remove-facture/{facture-id}
		@DeleteMapping("/remove-facture/{facture-id}")
		@ResponseBody
		public void removeFacture(@PathVariable("facture-id") Long factureId) {
			FactureService.deleteFacture(factureId);
		}
		// http://localhost:8081/SpringMVC/Facture/modify-facture
		@PutMapping("/modify-facture")
		@ResponseBody
		public Facture modifyClient(@RequestBody Facture f) {
		return FactureService.updateFacture(f);
		}
}
