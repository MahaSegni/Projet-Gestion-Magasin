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
    badge: string;
    promoActive: boolean;
    token:string;
    factures: Facture[];
    likedislike: LikeDislike[];
    codepromo: CodePromo;
    reclamations: Reclamation[]

    constructor(id:number,email:string="",password:string="",badge:string=""){
      this.idUser=id;
      this.email = email;
      this.password = password;
      this.badge = badge;
    }

  }
