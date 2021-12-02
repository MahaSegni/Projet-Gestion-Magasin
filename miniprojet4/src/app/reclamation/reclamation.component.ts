import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../services/reclamation.service";
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  listReclamation:any;
  listReclamationFront:any;
  constructor(private service:ReclamationService,private session:SessionService) { }

  ngOnInit(): void {
    let resp=this.service.afficherReclamation().subscribe((data)=> this.listReclamation=data);
    let resp1=this.service.getReclamationByUser(this.getUser()).subscribe((data)=> this.listReclamationFront=data);
  }
  getUserType():string{
    return this.session.getSessionType();
  }
  getUser():number{
    return this.session.getUser().idUser;
  }
}
