import { Injectable } from '@angular/core';
import {CategorieProduit} from "../Model/CategorieProduit";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../Model/Produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  public afficherProduitByCat(idCat: string | null)
  {return this.http.get("http://localhost:8081/SpringMVC/product/retrieve-all-productsByCat/"+idCat)}
  public afficherProduit ()
  {return this.http.get("http://localhost:8081/SpringMVC/product/retrieve-all-products");}

  public ajouterProduit (p:Produit)
  {return this.http.post("http://localhost:8081/SpringMVC/product/add-product",p);}

  public modifierProduit (p:Produit)
  {return this.http.put("http://localhost:8081/SpringMVC/product/modify-product",p);}

  public supprimerProduit (id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/product/remove-product/"+id);}

  public getProduit (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/product/retrieve-product/"+id);}

}
