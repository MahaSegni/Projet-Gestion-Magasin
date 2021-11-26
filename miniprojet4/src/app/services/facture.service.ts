import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facture} from "../Model/Facture";


@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private myhttp:HttpClient) { }

  public getFactures():Observable<Facture[]>{
    return this.myhttp.get<Facture[]>("http://localhost:8081/SpringMVC/Facture/retrieve-all-Factures");
  }
  public deleteFacture(id:number){
    return this.myhttp.delete("http://localhost:8081/SpringMVC/Facture/remove-facture/"+id);

  }
  public getFacture(id:number):Observable<Facture>{
    return this.myhttp.get<Facture>("http://localhost:8081/SpringMVC/Facture/retrieve/"+id);
  }
  public UpdateFacture(f:Facture):Observable<Facture>{
    return this.myhttp.put<Facture>("http://localhost:8081/SpringMVC/Facture/modify-facture",f);
  }
  public updateMontant(id:number):number{
     let montant:number=0;
    this.getFacture(id).subscribe((res)=> {
      let f = res;
      f.montantFacture=0;
      for(var item of f.detailFacture){
        if(item.produit.pourcentageRemise>0){
          let valeurremise=(item.produit.prixUnitaire*item.produit.pourcentageRemise)/100;
          let nvprix=item.produit.prixUnitaire-valeurremise;
          f.montantFacture=f.montantFacture+(item.qte*nvprix);

        }else{
          f.montantFacture=f.montantFacture+(item.qte*item.produit.prixUnitaire);
        }
      }
      console.log(f)
      montant=f.montantFacture;

      this.UpdateFacture(f).subscribe((res)=>{

      });
    });
    return montant;

  }
}
