import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DetailFacture} from "../../Model/detailFacture";

@Component({
  selector: 'app-form-detail-facture',
  templateUrl: './form-detail-facture.component.html',
  styleUrls: ['./form-detail-facture.component.css']
})
export class FormDetailFactureComponent implements OnInit {
  @Input() detailfacture:DetailFacture;
  @Output() NotifyEvent=new EventEmitter<String>();
  @Output() DeleteEvent=new EventEmitter<DetailFacture>();

  constructor() { }

  ngOnInit(): void {
  }
  notifyParentChangeQuantite(){
   this.NotifyEvent.emit();
  }
  notifyParentDelete(){
  this.DeleteEvent.emit(this.detailfacture);
  }

}
