import { Component, OnInit } from '@angular/core';
import {Panier} from "../../Model/Panier";
import {SessionService} from "../../services/session.service";
import {FactureService} from "../../services/facture.service";
import {Facture} from "../../Model/Facture";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  ProductOfpanier:Panier[]=[];
  constructor(private sessionService:SessionService,private route:Router,private factureService:FactureService) { }

  ngOnInit(): void {
    this.ProductOfpanier=this.sessionService.getPanier();
    if (this.sessionService.getUser() == null) {
      this.route.navigate(['/users/connexion'])
    } else if (this.sessionService.getUser().badge=='Moderateur'){
      this.route.navigate(['/factures/facture'])

    }
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
