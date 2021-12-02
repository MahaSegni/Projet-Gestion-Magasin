import { Injectable } from '@angular/core';
import {ReponseReclamation} from "../Model/ReponseReclamation";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReponseReclamationService {

  constructor(private http:HttpClient) { }
  public afficherReponseReclamation ()
  {return this.http.get("http://localhost:8081/SpringMVC/reponseReclamation/retrieve-all-reponsereclamations");}

  public ajouterReponseReclamation (r:ReponseReclamation)
  {return this.http.post("http://localhost:8081/SpringMVC/reponseReclamation/add-reponsereclamation",r);}

  public modifierReponseReclamation (r:ReponseReclamation)
  {return this.http.put("http://localhost:8081/SpringMVC/reponseReclamation/modify-reponsereclamation",r);}

  public supprimerReponseReclamation (id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/reponseReclamation/remove-reponsereclamation/"+id);}

  public getReponseReclamation (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/reponseReclamation/retrieve-reponsereclamation/"+id);}

}
