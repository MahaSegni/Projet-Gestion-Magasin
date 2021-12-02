import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facture} from "../Model/Facture";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FactureService} from "../services/facture.service";
import {DetailFacture} from "../Model/detailFacture";

@Component({
  selector: 'app-form-facture',
  templateUrl: './form-facture.component.html',
  styleUrls: ['./form-facture.component.css']
})
export class FormFactureComponent implements OnInit {
  @Input() facture:Facture;
  @Output() addEvent=new EventEmitter<Facture>();


  FormFacture: FormGroup;

  constructor(private factureService:FactureService) {
  }

  ngOnInit(): void {
    this.FormFacture= new FormGroup({
      'dateFacture': new FormControl({value: this.facture.dateFacture.toString(), disabled: true},[] ),
      'userFacture': new FormControl({value:this.facture.user.email,disabled:true}),
      'montantFacture':new FormControl({value:this.facture.montantFacture,disabled:true})
    });
  }
  changeMontat(){
    this.factureService.calculeMontat(this.facture)
  this.FormFacture.setValue({'dateFacture': this.facture.dateFacture.toString(),
    'userFacture':this.facture.user.email,
      'montantFacture': this.facture.montantFacture });

  }
  DeleteDetail(d:DetailFacture){
    this.facture.detailFacture=this.facture.detailFacture.filter((item)=>item!=d);
    this.factureService.calculeMontat(this.facture);
    this.FormFacture.setValue({'dateFacture': this.facture.dateFacture.toString(),
      'userFacture':this.facture.user.email,
      'montantFacture': this.facture.montantFacture });
  }
  saveFacture(){
  this.addEvent.emit(this.facture);
  }


}
