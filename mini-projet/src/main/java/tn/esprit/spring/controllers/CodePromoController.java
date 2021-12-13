package tn.esprit.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
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

import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.services.CodePromoService;

@RestController
@RequestMapping("/CodePromo")
@CrossOrigin(origins = "*")
//@ComponentScan(basePackages= {"tn.esprit.spring.services"})
public class CodePromoController {
	@Autowired
	CodePromoService codepromorepo;
	
	@GetMapping("/retrieve-all-CodePromo")
	@ResponseBody
	public List<CodePromo> getCodePromo() {
		return codepromorepo.retrieveAllCodePromo();
	}
	// http://localhost:8081/SpringMVC/CodePromo/retrieve-CodePromo/1
	@GetMapping("/retrieve-CodePromo/{idCodePromo}")
	@ResponseBody
	public CodePromo retrieveCodePromo(@PathVariable("idCodePromo") Long idCodePromo) {
		return codepromorepo.retrieveCodePromo(idCodePromo);
	}

	// http://localhost:8081/SpringMVC/CodePromo/add-CodePromo
	@PostMapping("/add-CodePromo")
	@ResponseBody
	public CodePromo addCodePromo(@RequestBody CodePromo c) {
		return codepromorepo.addCodePromo(c);
	}
	// http://localhost:8081/SpringMVC/CodePromo/remove-CodePromo/{idCodePromo}
	@DeleteMapping("/remove-CodePromo/{idCodePromo}")
	@ResponseBody
	public void removeCodePromo(@PathVariable("idCodePromo") int idCodePromo) {
		codepromorepo.deleteCodePromo((long) idCodePromo);
	}

	// http://localhost:8081/SpringMVC/CodePromo/modify-CodePromo
	@PutMapping("/modify-CodePromo")
	@ResponseBody
	public CodePromo modifyCodePromo(@RequestBody CodePromo c) {
		return codepromorepo.updateCodePromo(c);
	}
	
	@PutMapping("/add-CodePromo-toUser/{idUser}")
	@ResponseBody
	public void affecterCodePromoToUser(@PathVariable("idUser") Long idUser,@RequestBody String rech) {
		codepromorepo.affecterCodePromoToUser(idUser, rech);
	}
}
