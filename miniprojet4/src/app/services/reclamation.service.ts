import { Injectable } from '@angular/core';
import {Reclamation} from "../Model/Reclamation";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  public afficherReclamation ()
  {return this.http.get("http://localhost:8081/SpringMVC/reclamation/retrieve-all-reclamations");}

  public ajouterReclamation (r:Reclamation)
  {return this.http.post("http://localhost:8081/SpringMVC/reclamation/add-reclamation",r);}

  public modifierReclamation (r:Reclamation)
  {return this.http.put("http://localhost:8081/SpringMVC/reclamation/modify-reclamation",r);}

  public supprimerReclamation (id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/reclamation/remove-reclamation/"+id);}

  public getReclamation(id: string | null)
  {return this.http.get("http://localhost:8081/SpringMVC/reclamation/retrieve-reclamation/"+id);}
  public getReclamationByUser (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/reclamation/retrieve-all-reclamationsByUser/"+id);}

}
