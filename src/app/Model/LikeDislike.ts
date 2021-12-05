import { User } from "./user";
import { Produit } from "./Produit";

export class LikeDislike{
  constructor (date: Date, user: number, p: number) {
    this.createdDate=date;
    this.user=user;
    this.produit=p;
  }


  idLikeDislike: number;
  createdDate: Date;
  user: number;
  produit:number;
}
