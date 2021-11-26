import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {FactureService} from "../services/facture.service";
import {Facture} from "../Model/Facture";
import {DetailFacture} from "../Model/detailFacture";
import {DetailFactureService} from "../services/detail-facture.service";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factureList:Facture[];
  facture:Facture;
  displayall:boolean=true;
  modeCorriger:boolean=false;
  constructor(private factureService: FactureService,private detailFactureService:DetailFactureService,private session:SessionService) { }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe((res)=> {
      this.factureList=res;
    });


  }
  getUserType():string{
  return this.session.getSessionType();
  }
  ChangeDisplay(f:Facture){
    this.facture=f;
    this.displayall=false;
  }
  delete(id:number) {
    this.factureService.deleteFacture(id).subscribe(()=> {
      this.factureService.getFactures().subscribe((res)=> {
        this.factureList=res;
      });
    });
  }
  supprimerDetail(id:number) {
    this.detailFactureService.deleteDetailFacture(id).subscribe(()=> {
      this.factureService.updateMontant(this.facture.idFacture);

      this.factureService.getFacture(this.facture.idFacture).subscribe((res)=> {
        this.facture=res;
        this.factureService.getFacture(this.facture.idFacture).subscribe(res=>{
          this.facture.montantFacture=res.montantFacture;
        })
      });

      this.factureService.getFactures().subscribe((res)=> {
        this.factureList=res;
      });
    });
  }
  updateDetailFactureQuantite(df:DetailFacture){

    this.detailFactureService.UpdateDetailFactureQuantite(df).subscribe(()=> {
      this.factureService.updateMontant(this.facture.idFacture);
      this.factureService.getFacture(this.facture.idFacture).subscribe((res)=> {
        this.facture=res;
        this.factureService.getFacture(this.facture.idFacture).subscribe(res=>{
          this.facture.montantFacture=res.montantFacture;
        })
      });
      this.factureService.getFactures().subscribe((res)=> {
        this.factureList=res;
      });
    });
  }
}
