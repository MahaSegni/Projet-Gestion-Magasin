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

import tn.esprit.spring.entities.CategorieProduit;
import tn.esprit.spring.entities.Produit;
import tn.esprit.spring.services.CategorieProduitService;
import tn.esprit.spring.services.CategorieProduitServiceImpl;
import tn.esprit.spring.services.ProduitService;

@RestController
@RequestMapping("/productCategory")
@CrossOrigin(origins = "*")
@ComponentScan(basePackages= {"tn.esprit.spring.services"})
public class CategorieProduitRestController {

		@Autowired
		CategorieProduitService categorieProduitService;

		// http://localhost:8081/SpringMVC/productCategory/retrieve-all-productsCategories
		@GetMapping("/retrieve-all-productsCategories")
		@ResponseBody
		public List<CategorieProduit> getProductsCategories() {
			return categorieProduitService.retrieveAllCategorieProduits();
		}
		// http://localhost:8081/SpringMVC/productCategory/retrieve-productCategory/1
		@GetMapping("/retrieve-productCategory/{productCategory-id}")
		@ResponseBody
		public CategorieProduit retrieveProductCategory(@PathVariable("productCategory-id") Long productcategoryid) {
			return categorieProduitService.retrieveCategorieProduit(productcategoryid);
		}

		// http://localhost:8081/SpringMVC/productCategory/add-productCategory
		@PostMapping("/add-productCategory")
		@ResponseBody
		public CategorieProduit addProductCategory(@RequestBody CategorieProduit c) {
			return categorieProduitService.addCategorieProduit(c);
		}
		// http://localhost:8081/SpringMVC/productCategory/remove-productCategory/{productCategory-id}
		@DeleteMapping("/remove-productCategory/{productCategory-id}")
		@ResponseBody
		public void removeProductCategory(@PathVariable("productCategory-id") Long productcategoryid) {
			categorieProduitService.deleteCategorieProduit(productcategoryid);
		}

		// http://localhost:8081/SpringMVC/productCategory/modify-productCategory
		@PutMapping("/modify-productCategory")
		@ResponseBody
		public CategorieProduit modifyProductCategory(@RequestBody CategorieProduit c) {
			return categorieProduitService.updateCategorieProduit(c);
		}
}
