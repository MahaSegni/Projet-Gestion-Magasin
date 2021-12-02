import {User} from "./user";
import {ReponseReclamation} from "./ReponseReclamation";

export class Reclamation{

  idReclamation:number;
 objet:string;
  messageReclamation:string;
  imageReclamation:string;
  dateReclamation:Date;
  cloture:boolean =false;
  user:User;
  reponsesReclamation:ReponseReclamation[];
}

