
import { User } from "./user";
import { DetailFacture } from "./detailFacture";

export class Facture{
  idFacture: number;
  active: boolean;
  dateFacture: Date;
  montantFacture: number;
  user: User;
  detailFacture:DetailFacture[];

  constructor() {
   }

}
