import { CodePromo } from "./CodePromo";
import { Facture } from "./Facture";
import { LikeDislike } from "./LikeDislike";
import { Reclamation } from "./Reclamation";

export class User{
    idUser: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    email: string;
    password: string;
    urlpicture: string;
    token : string;
    badge: string;
    promoActive: boolean;
    factures: Facture[];
    likedislike: LikeDislike[];
    codepromo: CodePromo;
    reclamations: Reclamation[]

    constructor(email:string="",password:string="",badge:string=""){
      this.email = email;
      this.password = password;
      this.badge = badge;
    }
  }
  