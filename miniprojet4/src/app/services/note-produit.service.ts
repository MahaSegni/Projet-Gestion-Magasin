import { Injectable } from '@angular/core';
import {Reclamation} from "../Model/Reclamation";
import {NoteProduit} from "../Model/NoteProduit";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteProduitService {

  constructor(private http:HttpClient) { }


  public saveNote (note:NoteProduit)
  {
    return this.http.post("http://localhost:8081/SpringMVC/noteProduct/add-note-product",note);}

}
