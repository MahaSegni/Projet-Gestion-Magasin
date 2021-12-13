import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CodePromo} from "../Model/CodePromo";

@Injectable({
  providedIn: 'root'
})
export class CodePromoService {
  constructor(private http:HttpClient) {
  }
  public afficherCodePromo ()
  {return this.http.get("http://localhost:8081/SpringMVC/CodePromo/retrieve-all-CodePromo");}

  public saveCodePromo (code:CodePromo)
  {return this.http.post("http://localhost:8081/SpringMVC/CodePromo/add-CodePromo",code);}

  public affecterCodePromo (idUser:number, rech:string)
  {return this.http.put("http://localhost:8081/SpringMVC/CodePromo/add-CodePromo-toUser"+"/"+idUser,rech);}


  public supprimerCodePromo (id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/CodePromo/remove-CodePromo/"+id);
  }

  public getCodePromo (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/CodePromo/retrieve-CodePromo/"+id);}

}
