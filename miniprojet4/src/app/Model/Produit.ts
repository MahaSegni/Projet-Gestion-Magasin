import {LikeDislike} from "./LikeDislike";
import {DetailFacture} from "./detailFacture";
import {CategorieProduit} from "./CategorieProduit";
import {Fournisseur} from "./Fournisseur";

export class Produit {
  idProduit: number;
  code: string;
  libelle: string;
  dateCreation: Date;
  dateDerniereModification: Date;
  prixUnitaire:number;
  categorieProduit:CategorieProduit;
  imageProduit: string;
  quantiteEnStock:number;
  pourcentageRemise:number;
  fournisseurs: Fournisseur[];
  detailF: DetailFacture[];
  likedislike: LikeDislike[];


  constructor(idProduit: number, code: string, libelle: string, dateCreation: Date, dateDerniereModification: Date, prixUnitaire: number,
               categorieProduit: CategorieProduit, imageProduit: string, quantiteEnStock: number, pourcentageRemise: number) {
    this.idProduit = idProduit;
    this.code = code;
    this.libelle = libelle;
    this.dateCreation = dateCreation;
    this.dateDerniereModification = dateDerniereModification;
    this.prixUnitaire = prixUnitaire;
    this.categorieProduit = categorieProduit;
    this.imageProduit = imageProduit;
    this.quantiteEnStock = quantiteEnStock;
    this.pourcentageRemise = pourcentageRemise;
  }
}


