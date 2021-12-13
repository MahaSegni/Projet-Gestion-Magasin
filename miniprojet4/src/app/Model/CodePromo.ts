export class CodePromo{


  constructor(idCodePromo: number,cle: string, dateFin: Date, valeur: number) {
   this.idCodePromo=idCodePromo;
    this.cle = cle;
    this.dateFin = dateFin;
    this.valeur = valeur;
  }

  idCodePromo:number;
  cle:string;
  dateFin:Date;
  valeur:number;

}
