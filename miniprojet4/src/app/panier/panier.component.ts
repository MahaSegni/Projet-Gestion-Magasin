import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {Panier} from "../Model/Panier";
import {Facture} from "../Model/Facture";
import {FactureService} from "../services/facture.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  ProductOfpanier:Panier[]=[];
  constructor(private sessionService:SessionService,private factureService:FactureService) { }

  ngOnInit(): void {
    this.ProductOfpanier=this.sessionService.getPanier();
  }
  getUserType():string{
    return this.sessionService.getSessionType();
  }
  getPriceOfPanier():number{
  var f=new Facture();
  this.factureService.FromPanierToFacture(f,this.ProductOfpanier);
  this.factureService.calculeMontat(f);
  return f.montantFacture;
  }
  viderPanier(){
     this.sessionService.setPanier([]);
    this.ProductOfpanier=this.sessionService.getPanier();

  }

}
