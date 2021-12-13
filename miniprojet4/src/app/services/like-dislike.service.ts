import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LikeDislike} from "../Model/LikeDislike";

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {

  constructor(private http:HttpClient) {
  }
  public afficherLikeDislike ()
  {return this.http.get("http://localhost:8081/SpringMVC/LikeDislike/retrieve-all-LikeDislike");}

  public saveLikeDislike (LikeDislike:LikeDislike)
  {return this.http.post("http://localhost:8081/SpringMVC/LikeDislike/add-LikeDislike",LikeDislike);}

  public getProduit (id :number)
  {return this.http.get("http://localhost:8081/SpringMVC/LikeDislike/retrieve-LikeDislike/"+id);}

  public supprimerLikeDislike(id :number)
  {return this.http.delete("http://localhost:8081/SpringMVC/LikeDislike/remove-LikeDislike/"+id);
  }
}
