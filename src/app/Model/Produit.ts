import {LikeDislike} from "./LikeDislike";
import {detailFacture} from "./detailFacture";
import {Fournisseur} from "./Fournisseur";
import {CategorieProduit} from "./CategorieProduit";

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
  detailF: detailFacture[];
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

    this.imageProduit = "/assets/img/ProductPic/" +imageProduit;

    this.quantiteEnStock = quantiteEnStock;
    this.pourcentageRemise = pourcentageRemise;
  }
}


