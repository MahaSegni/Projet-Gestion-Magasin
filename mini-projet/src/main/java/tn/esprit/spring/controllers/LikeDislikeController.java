package tn.esprit.spring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.entities.LikeDislike;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.repositories.LikeDislikeRepository;
import tn.esprit.spring.services.LikeDislikeService;
@RestController
@RequestMapping("/LikeDislike")
@CrossOrigin(origins = "*")
public class LikeDislikeController {
	@Autowired
	LikeDislikeService service;
	@Autowired
	LikeDislikeRepository repo;
	@GetMapping("/retrieve-all-LikeDislike")
	@ResponseBody
	public List<LikeDislike> getLikeDislike() {
		return service.retrieveAllLikeDislike();
	}
	
	// http://localhost:8081/SpringMVC/LikeDislike/add-LikeDislike
		@PostMapping("/add-LikeDislike")
		@ResponseBody
		public LikeDislike addLikeDislike(@RequestBody LikeDislike c) {
			return service.addLikeDislike(c);
		}
		
		@DeleteMapping("/remove-LikeDislike/{idLikeDislike}")
		@ResponseBody
		public void removeLikeDislike(@PathVariable("idLikeDislike") int idLikeDislike) {
			LikeDislike l = repo.findById((long) idLikeDislike).get();
			l.setUser(null);
			l.setProduit(null);
			service.deleteLikeDislike(l.getIdLikeDislike());
		}
		
		@GetMapping("/retrieve-LikeDislike/{idUser}")
		@ResponseBody
		public List<LikeDislike> retrieveLikeDislike(@PathVariable("idUser")long idUser) {
			List<LikeDislike> l =  service.retrieveAllLikeDislike();
			List<LikeDislike> lc =new ArrayList<LikeDislike>();
			
			for (LikeDislike p : l) {
			 
				if (p.getUser().getIdUser()==idUser) 
				{ 

					lc.add(p);	
				}
				}
			return lc;
		}
}
