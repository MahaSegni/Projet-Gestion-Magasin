import { Component, OnInit } from '@angular/core';

import {ChartType, GoogleChartComponent} from 'angular-google-charts';
import {Reclamation} from "../../Model/Reclamation";
import {ReclamationService} from "../../services/reclamation.service";
@Component({
  selector: 'app-stat-reclamation',
  templateUrl: './stat-reclamation.component.html',
  styleUrls: ['./stat-reclamation.component.css']
})
export class StatReclamationComponent implements OnInit {
  listReclamation:any;
  cloture:number=0;
  noncloture:number=0;
  title = 'Statistique Reclamation';
  type = 'PieChart' as ChartType;
  columnNames = ['Cloturé', 'En cours de traitement'] ;
  options = {   is3D: true};
  dataRec=[] as any;
  width = 0;
  height = 0;
  constructor(public service:ReclamationService) { }

  ngOnInit(): void {

    let resp=this.service.afficherReclamation().subscribe((data)=>
    {this.listReclamation=data

      for( let a of this.listReclamation )
      {if(a.cloture){
        this.cloture+=1;
      }else this.noncloture+=1;

      }

      this.dataRec = [
        ['Cloture' , this.cloture],
        ['En cours de traitement', this.noncloture],

      ];
    });
  }

}
