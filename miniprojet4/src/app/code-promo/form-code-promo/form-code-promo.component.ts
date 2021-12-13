import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CodePromo} from "../../Model/CodePromo";


@Component({
  selector: 'app-form-code-promo',
  templateUrl: './form-code-promo.component.html',
  styleUrls: ['./form-code-promo.component.css']
})
export class FormCodePromoComponent implements OnInit {
  FormCodePromo: FormGroup;
  CodePromo:CodePromo;
  @Output() addEvent=new EventEmitter<CodePromo>();
  @Input() updateCodePromo:CodePromo;

  constructor() {}

  ngOnInit(): void {
    if(this.updateCodePromo== null){
      this.FormCodePromo= new FormGroup({
        'idCodePromo': new FormControl('', ),
        'cle': new FormControl('', [Validators.required,Validators.minLength(4)]),
        'dateFin': new FormControl('', [Validators.required]),
        'valeur': new FormControl('', [Validators.required,Validators.min(5)]),
      })}
    else{
      this.FormCodePromo= new FormGroup({
        'idCodePromo': new FormControl(this.updateCodePromo.idCodePromo, ),
        'cle': new FormControl(this.updateCodePromo.cle, [Validators.required]),
        'dateFin': new FormControl(this.updateCodePromo.dateFin, ),
        'valeur': new FormControl(this.updateCodePromo.valeur, [Validators.required]),

      })
    }
  }

  saveCodePromo(form:FormGroup){
    this.CodePromo=new CodePromo(form.value.idCodePromo,form.value.cle,form.value.dateFin,form.value.valeur);
    this.addEvent.emit(this.CodePromo)
  }

}
