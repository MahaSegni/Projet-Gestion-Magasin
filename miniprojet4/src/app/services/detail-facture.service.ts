import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facture} from "../Model/Facture";
import {Observable} from "rxjs";
import {DetailFacture} from "../Model/detailFacture";

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {

  constructor(private myhttp:HttpClient) { }
  public deleteDetailFacture(id:number){
    return this.myhttp.delete("http://localhost:8081/SpringMVC/DetailFacture/remove/"+id);
  }
  public add(detail:DetailFacture,id:number){
    return this.myhttp.post("http://localhost:8081/SpringMVC/DetailFacture/add/"+id,detail)
  }
  public UpdateDetailFacture(df:DetailFacture):Observable<DetailFacture>{
    return this.myhttp.put<DetailFacture>("http://localhost:8081/SpringMVC/DetailFacture/modify",df);
  }
   public UpdateDetailFactureQuantite(df:DetailFacture){
  return this.myhttp.put<DetailFacture>("http://localhost:8081/SpringMVC/DetailFacture/modify/quantite",df);
}

}
