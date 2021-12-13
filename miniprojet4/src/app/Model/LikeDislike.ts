import {Produit} from "./Produit";
import {User} from "./user";

export class LikeDislike{


  constructor(idLikeDislike: number, user: User, produit: Produit) {
    this.idLikeDislike = idLikeDislike;
    this.user = user;
    this.produit = produit;
  }

  idLikeDislike:number;
  user:User;
  produit:Produit;
}
