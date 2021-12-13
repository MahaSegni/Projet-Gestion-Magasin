import { Component, OnInit } from '@angular/core';
import {LikeDislikeService} from "../../services/like-dislike.service";
import {SessionService} from "../../services/session.service";
import {CodePromo} from "../../Model/CodePromo";
import {LikeDislike} from "../../Model/LikeDislike";
import {Router} from "@angular/router";
import {Panier} from "../../Model/Panier";
import {Produit} from "../../Model/Produit";
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-list-like-dislike',
  templateUrl: './list-like-dislike.component.html',
  styleUrls: ['./list-like-dislike.component.css']
})
export class ListLikeDislikeComponent implements OnInit {
list:any;
  constructor(private service:LikeDislikeService,private session:SessionService,private router: Router,private produitsevice:ProduitService) { }

  ngOnInit(): void {
    let resp= this.service.getProduit(this.getUser()).subscribe((data)=>this.list=data);


  }
  getUser():number{
    return this.session.getUser().idUser;
  }
  deleteLike(p:LikeDislike){
    p.produit.valeur=false;
    let resp= this.produitsevice.ajouterProduit(p.produit).subscribe();
    this.service.supprimerLikeDislike(p.idLikeDislike).subscribe(()=>{
      let resp= this.service.getProduit(this.getUser()).subscribe((data)=>this.list=data);
    });
    this.router.navigate(['/LikeDislike/LikeDislike']);

  }

  getUserType():String{
    return this.session.getUser().badge;
  }

}
