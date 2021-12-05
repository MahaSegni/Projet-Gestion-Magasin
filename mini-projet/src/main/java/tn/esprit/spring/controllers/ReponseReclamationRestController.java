package tn.esprit.spring.controllers;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entities.Reclamation;
import tn.esprit.spring.entities.ReponseReclamation;
import tn.esprit.spring.services.ReclamationService;
import tn.esprit.spring.services.ReponseReclamationService;

@RestController
@RequestMapping("/reponseReclamation")
@CrossOrigin(origins = "*")
//@ComponentScan(basePackages= {"tn.esprit.spring.services"})

public class ReponseReclamationRestController {

	@Autowired
	ReponseReclamationService reponseReclamationService;

	// http://localhost:8081/SpringMVC/reponseReclamation/retrieve-all-reponsesreclamations
	@GetMapping("/retrieve-all-reponsesreclamations")
	@ResponseBody
	public List<ReponseReclamation> getReponsesReclamations() {
		return reponseReclamationService.retrieveAllReponsesReclamation();
	}
	// http://localhost:8081/SpringMVC/reponseReclamation/retrieve-all-reponsesreclamationsByRec/{reclamation-id}
	@GetMapping("/retrieve-all-reponsesreclamationsByRec/{reclamation-id}")
	@ResponseBody
	public List<ReponseReclamation> getReponsesReclamationsByRec(@PathVariable("reclamation-id") Long id) {
		List<ReponseReclamation> rRec=new ArrayList<>();
		for (ReponseReclamation r : reponseReclamationService.retrieveAllReponsesReclamation())
		{if (r.getReclamation().getIdReclamation()==id)
		{rRec.add(r);
			
		}
			
		}
		return rRec ;
	}	
	// http://localhost:8081/SpringMVC/reponseReclamation/retrieve-reponsereclamation/1
	@GetMapping("/retrieve-reponsereclamation/{reponsereclamation-id}")
	@ResponseBody
	public ReponseReclamation retrieveReponseReclamation(@PathVariable("reponsereclamation-id") Long id) {
		return reponseReclamationService.retrieveReponseReclamation(id);
	}

	// http://localhost:8081/SpringMVC/reponseReclamation/add-reponsereclamation
	@PostMapping("/add-reponsereclamation")
	@ResponseBody
	public ReponseReclamation addReponseReclamation(@RequestBody ReponseReclamation r ) {
		return reponseReclamationService.addReponseReclamation(r);
	}
	// http://localhost:8081/SpringMVC/reponseReclamation/remove-reponsereclamation/{reponsereclamation-id}
	@DeleteMapping("/remove-reponsereclamation/{reponsereclamation-id}")
	@ResponseBody
	public void removeReponseReclamation(@PathVariable("reponsereclamation-id") Long id) {
		reponseReclamationService.deleteReponseReclamation(id);
	}

	// http://localhost:8081/SpringMVC/reponseReclamation/modify-reponsereclamation
	@PutMapping("/modify-reponsereclamation")
	@ResponseBody
	public ReponseReclamation modifyReponseReclamation(@RequestBody ReponseReclamation r) {
		return reponseReclamationService.updateReponseReclamation(r);
	}
}
