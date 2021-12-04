import {Produit} from "./Produit";

export class CategorieProduit {
  idCategorieProduit: number;
  libelle: string;
  categorieProduitIcone:string;
  produits:Produit[];


  constructor(idCategorieProduit: number, libelle: string, categorieProduitIcone: string) {
    this.idCategorieProduit = idCategorieProduit;
    this.libelle = libelle;
    if (categorieProduitIcone!="" &&  !categorieProduitIcone.includes("/assets/img/"))
    { this.categorieProduitIcone = "/assets/img/ProductPic/" +categorieProduitIcone;}
    else { this.categorieProduitIcone = "/assets/img/ProductPic/Category.png";}

  }
}
