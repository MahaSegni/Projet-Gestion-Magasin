import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import {Panier} from "../Model/Panier";
import {Produit} from "../Model/Produit";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {

  }
  setSession(){
    if(localStorage.getItem('user')==null){
      let user=new User("mehdi.maalawi@esprit.tn","1234","Fidele");
      localStorage.setItem('user',JSON.stringify(user));
    }
    if(localStorage.getItem('panier')==null){
      let p:Panier[]=[];
      localStorage.setItem('panier',JSON.stringify(p));
    }
  }
  getUser(): User {
    let user: User
    let data: any;
    data = localStorage.getItem('user');
    user = JSON.parse(data)
    return user
  }

  setUser(u: User) {
    localStorage.setItem('user', JSON.stringify(u))
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
  removePanier(){
    localStorage.removeItem('panier');
  }

  getSessionType(): string {
    //let user = this.getUser()
    let user=new User("mehdi.maalawi@esprit.tn","1234","Fidele");
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
