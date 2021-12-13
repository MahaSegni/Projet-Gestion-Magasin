import { Component, OnInit } from '@angular/core';
import {Facture} from "../../Model/Facture";
import {FactureService} from "../../services/facture.service";
import {SessionService} from "../../services/session.service";
import {DetailFactureService} from "../../services/detail-facture.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  facture:Facture;
  showFacture=true;
  showMessage=false;
  constructor(private route : Router,private factureService:FactureService,private sessionService:SessionService,private detailFactureService:DetailFactureService) { }

  ngOnInit(): void {

    if (this.sessionService.getUser() == null) {
      this.route.navigate(['/users/connexion'])
    } else if (this.sessionService.getPanier().length <= 0) {
      this.route.navigate(['/factures/panier'])

    } else {
      this.facture = new Facture();
      this.facture.active = true;
      this.facture.dateFacture = new Date();
      this.factureService.FromPanierToFacture(this.facture, this.sessionService.getPanier());
      this.facture.user = this.sessionService.getUser();
    }


  }

  addFacture(f:Facture)
  {
    this.factureService.addFacture(f).subscribe((fact)=>{
      for (let item of f.detailFacture){
        this.detailFactureService.add(item,fact.idFacture).subscribe(
          ()=>{

            this.facture=new Facture();
            this.sessionService.setPanier([]);
            this.showFacture=false;
          }
        )
      }
      this.showFacture=false;
      this.BackToProdcut()
    })

  }

  BackToProdcut(){
    this.showMessage=true;
  }
  }
