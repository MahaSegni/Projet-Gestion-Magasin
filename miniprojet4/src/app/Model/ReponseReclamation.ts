import {Reclamation} from "./Reclamation";
import {User} from "./user";

export class ReponseReclamation{
  idReponseReclamation: number;
  reponse: string;
  imageReponseReclamation: string ;
  dateReponseReclamation: Date;
  user:User;
  Reclamation:Reclamation;
  numreclamation:number;

  constructor(idReponseReclamation: number, reponse: string, imageReponseReclamation: string, dateReponseReclamation: Date, user: User,reclamation:Reclamation,numreclamation:number) {
    this.idReponseReclamation = idReponseReclamation;
    this.reponse = reponse;

    if (imageReponseReclamation!="" && !imageReponseReclamation.includes("/assets/img/"))
    { this.imageReponseReclamation = "/assets/img/ReclamationPic/" +imageReponseReclamation;}
    else { this.imageReponseReclamation = imageReponseReclamation}

    this.Reclamation=reclamation;
    this.dateReponseReclamation = dateReponseReclamation;
    this.user = user;
    this.numreclamation=numreclamation;
  }
}
