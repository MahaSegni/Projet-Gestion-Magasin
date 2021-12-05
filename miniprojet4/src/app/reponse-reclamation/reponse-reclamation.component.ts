import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReponseReclamationService} from "../services/reponse-reclamation.service";
import {Reclamation} from "../Model/Reclamation";
import {ReclamationService} from "../services/reclamation.service";
import {SessionService} from "../services/session.service";
import {ReponseReclamation} from "../Model/ReponseReclamation";

@Component({
  selector: 'app-reponse-reclamation',
  templateUrl: './reponse-reclamation.component.html',
  styleUrls: ['./reponse-reclamation.component.css']
})
export class ReponseReclamationComponent implements OnInit {
listrep:any;
  reclamation:any;
  rec:Reclamation;
  listRepReclamation:any;
  listRepReclamationFront:any;
  showFormTemplateAdd:Boolean;
  showFormTemplateUpdate:Boolean;
  showFormTemplateId:number;
  inputRepReclamation: ReponseReclamation;
  constructor(private route: ActivatedRoute,private service:ReponseReclamationService,private serviceRec:ReclamationService,public session:SessionService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{

      this.service.afficherReponsesReclamationByRec(params.get("Recid")).subscribe((data)=>this.listrep=data);
      this.serviceRec.getReclamation(params.get("Recid")).subscribe((data)=>{
        this.reclamation=data;
        this.rec= new Reclamation(this.reclamation.idReclamation,this.reclamation.objet,this.reclamation.messageReclamation,this.reclamation.imageReclamation,this.reclamation.dateReclamation,this.reclamation.user,this.reclamation.cloture);

        }
      )

    });
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
  }
  getUserId(){
 return  this.session.getUser().idUser;
}

  supprimerRepRec(id: number){

    let resp= this.service.supprimerReponseReclamation(id).subscribe(()=>{
      this.route.paramMap.subscribe(params=>{

        this.service.afficherReponsesReclamationByRec(params.get("Recid")).subscribe((data)=>this.listrep=data);
        this.serviceRec.getReclamation(params.get("Recid")).subscribe((data)=>this.reclamation=data)
      });
    });
  }

  saveRepRec(repRec: ReponseReclamation){

    let resp= this.service.ajouterReponseReclamation(repRec,this.rec).subscribe(()=>{
      this.route.paramMap.subscribe(params=>{
        this.service.afficherReponsesReclamationByRec(params.get("Recid")).subscribe((data)=>this.listrep=data);
        this.serviceRec.getReclamation(params.get("Recid")).subscribe((data)=>this.reclamation=data)
      });
    });
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
  }

  showFormAdd()
  {this.showFormTemplateAdd=! this.showFormTemplateAdd;
  }

  updateForm(repRec:ReponseReclamation)
  {  this.showFormTemplateUpdate=!this.showFormTemplateUpdate;
    this.showFormTemplateId=repRec.idReponseReclamation;
    this.inputRepReclamation=repRec;
  }

}
