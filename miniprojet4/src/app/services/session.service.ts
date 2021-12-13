import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import {Panier} from "../Model/Panier";
import {Produit} from "../Model/Produit";
import {LikeDislike} from "../Model/LikeDislike";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    constructor() {

  }
  getUser(): User {
    let user: User
    let data: any;
    data = localStorage.getItem('user');
    user = JSON.parse(data)
    return user
  }

  setPanier(p:Panier[]){
    localStorage.setItem('panier',JSON.stringify(p));
  }
  addToPanier(produit:Produit,quantite:number){
    let p=new Panier();
    let datapanier:any;
    p.quantite=quantite;
    p.produit=produit;
    datapanier=localStorage.getItem('panier');
    let panier=JSON.parse(datapanier);
    panier.push(p);
    localStorage.setItem('panier',JSON.stringify(panier));
  }
  getPanier():Panier[]{
    let panier:Panier[];
    let data: any;
    data = localStorage.getItem('panier');
    panier = JSON.parse(data)
    return panier;

  }
  getlist():LikeDislike[]{
    let list:LikeDislike[];
    let data: any;
    data = localStorage.getItem('panier');
    list = JSON.parse(data)
    return list;
  }
  setUser(u: User) {
    localStorage.setItem('user', JSON.stringify(u))
  }

  getSessionType(): string {
    let user = this.getUser()
    if (user != null) {
      if (user.badge === 'Fidele' || user.badge == "Ordinaire" || user.badge === 'Premium') {
        return 'USER';
      }
      else if (user.badge === 'Moderateur')
        return 'MODERATEUR';
      else
        return 'NL';
    }
    return 'NL';
  }

  clearSession(){
    localStorage.clear();
  }




}
