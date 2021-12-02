import {Produit} from "./Produit";

export class CategorieProduit {
  idCategorieProduit: number;
  libelle: string;
  categorieProduitIcone:string;
  produits:Produit[];


  constructor(idCategorieProduit: number, libelle: string, categorieProduitIcone: string) {
    this.idCategorieProduit = idCategorieProduit;
    this.libelle = libelle;
    this.categorieProduitIcone = categorieProduitIcone;
  }
}
