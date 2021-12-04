import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../services/reclamation.service";
import {SessionService} from "../services/session.service";
import {CategorieProduit} from "../Model/CategorieProduit";
import {Reclamation} from "../Model/Reclamation";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  listReclamation:any;
  listReclamationFront:any;
  showFormTemplateAdd:Boolean;
  showFormTemplateUpdate:Boolean;
  showFormTemplateId:number;
  inputReclamation: Reclamation;
  constructor(private service:ReclamationService,private session:SessionService) { }

  ngOnInit(): void {
    let resp=this.service.afficherReclamation().subscribe((data)=> this.listReclamation=data);
    let resp1=this.service.getReclamationByUser(this.getUser()).subscribe((data)=> this.listReclamationFront=data);
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
  }

  getUserType():string{
    return this.session.getSessionType();
  }

  getUser():number{
    return this.session.getUser().idUser;
  }

  supprimerRec(id: number){
    let resp= this.service.supprimerReclamation(id).subscribe(()=>{
      this.service.getReclamationByUser(this.getUser()).subscribe((data)=>{this.listReclamationFront=data;})
    });
  }

  saveRec(rec: Reclamation){
    let resp= this.service.ajouterReclamation(rec).subscribe(()=>{
      this.service.getReclamationByUser(this.getUser()).subscribe((data)=>{this.listReclamationFront=data;})
    });
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
  }

  showFormAdd()
  {this.showFormTemplateAdd=! this.showFormTemplateAdd;
  }

  cloturer(l:Reclamation)
  {l.cloture=!l.cloture;
    this.saveRec(l);
  }

  updateForm(rec:Reclamation)
  {  this.showFormTemplateUpdate=!this.showFormTemplateUpdate;
     this.showFormTemplateId=rec.idReclamation;
     this.inputReclamation=rec;
  }
}
