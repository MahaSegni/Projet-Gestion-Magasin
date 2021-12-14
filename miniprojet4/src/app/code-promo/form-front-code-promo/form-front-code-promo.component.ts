import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CodePromo} from "../../Model/CodePromo";

@Component({
  selector: 'app-form-front-code-promo',
  templateUrl: './form-front-code-promo.component.html',
  styleUrls: ['./form-front-code-promo.component.css']
})
export class FormFrontCodePromoComponent implements OnInit {
  FormCodePromoFront: FormGroup;
  CodePromo:CodePromo;
  @Output() affectEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.FormCodePromoFront = new FormGroup({
      'cle': new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
    ;
  }
  affecter(f:FormGroup){

   this.affectEvent.emit(f.value.cle);
  }

}
