
package tn.esprit.spring.controllers;

import java.math.RoundingMode;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import tn.esprit.spring.entities.NoteProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.services.NoteProduitService;
import tn.esprit.spring.services.ProduitService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
//@ComponentScan(basePackages= {"tn.esprit.spring.services"})

public class ProduitRestController {

	@Autowired
	ProduitService produitService;
	@Autowired
	NoteProduitService noteProduitService ;
	
	

	// http://localhost:8081/SpringMVC/product/retrieve-all-products
	@GetMapping("/retrieve-all-products")
	@ResponseBody
	public List<Produit> getProducts() {
		return produitService.retrieveAllProduits();

	}
	// http://localhost:8081/SpringMVC/product/retrieve-productnote/2
	/*@GetMapping("/retrieve-productnote/{product-id}")
	@ResponseBody
	public List<NoteProduit> retrieveProductnote(@PathVariable("product-id") Long productid) {
		return produitService.retrieveProduit(productid).getNotesProduit();
	}*/
	// http://localhost:8081/SpringMVC/product/retrieve-product/2
	@GetMapping("/retrieve-product/{product-id}")
	@ResponseBody
	public Produit retrieveProduct(@PathVariable("product-id") Long productid) {
		return produitService.retrieveProduit(productid);
	}

	// http://localhost:8081/SpringMVC/product/add-product
	@PostMapping("/add-product")
	@ResponseBody
	public Produit addProduct(@RequestBody Produit c) {
		return produitService.addProduit(c);
	}
	// http://localhost:8081/SpringMVC/product/remove-product/{product-id}
	@DeleteMapping("/remove-product/{product-id}")
	@ResponseBody
	public void removeProduct(@PathVariable("product-id") Long clientId) {
		produitService.deleteProduit(clientId);
	}

	// http://localhost:8081/SpringMVC/product/modify-product
	@PutMapping("/modify-product")
	@ResponseBody
	public Produit modifyProduct(@RequestBody Produit produit) {
		return produitService.updateProduit(produit);
	}
	//http://localhost:8081/SpringMVC/product/retrieve-all-productsByCat/{idcat}/{idUser}
	@GetMapping("/retrieve-all-productsByCat/{idcat}/{idUser}")
	@ResponseBody
	public List<Produit> getProductsByCat(@PathVariable("idcat")long idcat,@PathVariable("idUser")long idUser) {
		boolean test=false;
		List<Produit> l =  produitService.retrieveAllProduits();
		List<Produit> lc =new ArrayList<Produit>();
		
		for (Produit p : l) {
		 
			if (p.getCategorieProduit().getIdCategorieProduit()==idcat) 
			{ 
				p.setNote(noteProduitService.getNotesProductByUser(idUser,p.getIdProduit()));
				
				p.setMoyenneNote(Math.round(noteProduitService.getNotesProductByIdProduct(p.getIdProduit())));
				
				lc.add(p);	
			}
			}
	
		
		for (Produit p : lc) {
		 
				p.getNote().setProduit(null);
			}
	

		return lc;
	}
	
	
			//http://localhost:8081/SpringMVC/product/uploadImage
	@PostMapping("/uploadImage")
	public void uploadFile(@RequestParam("file") MultipartFile file) {
	 String message = "";
	 try {
			produitService.saveImage(file);   
			System.out.print( message = "Uploaded the file successfully: " + file.getOriginalFilename());
	 } catch (Exception e) {
			    System.out.print(  message = "Could not upload the file: " + file.getOriginalFilename() + "!");
			    }
			}
	
}
