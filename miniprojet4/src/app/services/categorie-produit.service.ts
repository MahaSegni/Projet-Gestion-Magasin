import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieProduit} from "../Model/CategorieProduit";

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {

  constructor(private http:HttpClient) {

  }

  public afficherCategoriesProduit ()
  {return this.http.get("http://localhost:8081/SpringMVC/productCategory/retrieve-all-productsCategories");}

  public saveCategorieProduit (cat:CategorieProduit)
  {return this.http.post("http://localhost:8081/SpringMVC/productCategory/add-productCategory",cat);}


  public supprimerCategorieProduit (id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/productCategory/remove-productCategory/"+id);
  }

  public getCategorieProduit (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/productCategory/retrieve-productCategory/"+id);}


}
