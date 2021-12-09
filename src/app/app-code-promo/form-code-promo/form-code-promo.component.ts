import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CodePromo} from "../../Model/CodePromo";
import {CodePrmoService} from "../../services/code-prmo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-code-promo',
  templateUrl: './form-code-promo.component.html',
  styleUrls: ['./form-code-promo.component.css']
})
export class FormCodePromoComponent implements OnInit {
  f: FormGroup;
  code:CodePromo;
  @Output() addEvent=new EventEmitter<CodePromo>();
  @Input() updateCodePromo:CodePromo;

  constructor(private service: CodePrmoService) { }
  ngOnInit(): void {
    if(this.updateCodePromo== null){
      this.f= new FormGroup({
        'cle': new FormControl('', [Validators.required,Validators.minLength(4)]),
        'dateFin': new FormControl('', [Validators.required]),
        'valeur': new FormControl('', [Validators.required,Validators.min(5)]),
      })}
    else{
      this.f= new FormGroup({
        'cle': new FormControl(this.updateCodePromo.cle, [Validators.required]),
        'dateFin': new FormControl(this.updateCodePromo.dateFin, [Validators.required]),
        'valeur': new FormControl(this.updateCodePromo.valeur, [Validators.required]),
      })
    }
  }
  save(form:FormGroup){
    this.code=new CodePromo(form.value.cle,form.value.dateFin,form.value.valeur);
    this.addEvent.emit(this.code)
    this.service.addCode(this.code).subscribe();
  }

}
