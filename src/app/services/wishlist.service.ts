import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  WishlistUrl:string='http://localhost:8080/SpringMVC/api/v1/wishlist/'
  constructor(private http:HttpClient) { }

  addCode(idProduit: any): Observable<Object> {
    return this.http.post(this.WishlistUrl+idProduit,idProduit);
  }
}
