import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {CategorieProduitService} from "../services/categorie-produit.service";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {CategorieProduit} from "../Model/CategorieProduit";
import {Produit} from "../Model/Produit";
import {WishlistService} from "../services/wishlist.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  listProduit:any
  listProduitFront:any
  showFormTemplate:boolean
  inputProduct: Produit;

  constructor(private router: Router,private WishlistService: WishlistService,private route: ActivatedRoute,private service:ProduitService,private session:SessionService) {
  }

  ngOnInit(): void {
    this.showFormTemplate=false
    let resp=this.service.afficherProduit().subscribe((data)=> this.listProduit=data);

    this.route.paramMap.subscribe((params)=>{
    let resp1 = this.service.afficherProduitByCat(params.get('categoryid'))
      .subscribe((data) => this.listProduitFront = data); });
  }

  supprimerProd(id: number){
    let resp= this.service.supprimerProduit(id).subscribe(()=>{
      this.service.afficherProduit().subscribe((data)=>{this.listProduit=data;})
    });
  }

  saveProduct(p: Produit){
    let resp= this.service.ajouterProduit(p).subscribe(()=>{
      this.service.afficherProduit().subscribe((data)=>{this.listProduit=data;})
    });
    this.showFormTemplate=false;
  }

  getUserType():string{
    return this.session.getSessionType();
  }
wish(idProduit:number){
  this.WishlistService.addCode(idProduit).subscribe();
  this.router.navigate(['/wishlist/'+idProduit]);
}
  showForm()
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
  }

  updateForm(p:Produit)
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
    this.inputProduct=p;
  }
}
