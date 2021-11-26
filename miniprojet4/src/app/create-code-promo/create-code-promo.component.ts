import { Component, OnInit } from '@angular/core';
import {CodePrmoService} from "../services/code-prmo.service";
import {Route, Router} from "@angular/router";
import {CodePromo} from "../Model/CodePromo";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-code-promo',
  templateUrl: './create-code-promo.component.html',
  styleUrls: ['./create-code-promo.component.css']
})
export class CreateCodePromoComponent implements OnInit {
  code: CodePromo = new CodePromo() ;
  submitted = false;
  myForm: FormGroup;
  constructor(private service: CodePrmoService,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'cle':[this.code.cle,[Validators.required]],
      'dateFin':[this.code.dateFin,[Validators.required]],
      'valeur': [this.code.valeur,[Validators.required]],
    });
    this.myForm = new FormGroup({
      cle: new FormControl(),
      dateFin: new FormControl(),
      valeur: new FormControl(),
    });
  }

  get f() { return this.myForm.controls; }
  save(f: FormGroup) {
    this.submitted = true;
    this.code.cle= f.value.cle;
    this.code.dateFin= f.value.dateFin;
    this.code.valeur= f.value.valeur;
    this.service.addCode(this.code).subscribe(data => {
        console.log(data)
        this.code = new CodePromo();
        this.gotoList();
      },
      error => console.log(error));
  }


  gotoList() {
    this.router.navigate(['/codepromo']);
  }
}
