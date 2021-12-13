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
import tn.esprit.spring.entities.detailFacture;
import tn.esprit.spring.services.DetailFactureService;
import tn.esprit.spring.services.FactureService;

@CrossOrigin("*")
@RestController
@RequestMapping("/DetailFacture")
public class DetailFactureRestController {
	@Autowired
	DetailFactureService detailFactureService;
	@Autowired
	FactureService factureService;
	//http://localhost:8081/SpringMVC/DetailFacture/retrieve-all-detailFactures
		@GetMapping("/retrieve-all-detailFactures")
		@ResponseBody
		public List<detailFacture> getDetailFactures() {
		List<detailFacture> listdetailFacture = detailFactureService.retrieveAlldetailFactures();
		return listdetailFacture;
		}
		@PostMapping("/add/{facture-id}")
		@ResponseBody
		public detailFacture add(@RequestBody detailFacture df,@PathVariable("facture-id") Long idFacture) {
			Facture f = factureService.retrieveFacture(idFacture);
			df.setFacture(f);
			return detailFactureService.adddetailFacture(df);
		}
	//http://localhost:8081/SpringMVC/DetailFacture/modify
	@PutMapping("/modify")
	@ResponseBody
	public detailFacture modifyDetailFacture(@RequestBody detailFacture df) {
		return detailFactureService.updatedetailFacture(df);
	}
	@PutMapping("/modify/quantite")
	@ResponseBody
	public int modifyDetailFacturequantite(@RequestBody detailFacture df) {
		return detailFactureService.updatedetailFactureQuantite(df);
	}
	@DeleteMapping("/remove/{detailfacture-id}")
	@ResponseBody
	public void removeDetailFacture(@PathVariable("detailfacture-id") Long detailfactureId) {
		detailFactureService.deletedetailFacture(detailfactureId);
		
	}
	
}
