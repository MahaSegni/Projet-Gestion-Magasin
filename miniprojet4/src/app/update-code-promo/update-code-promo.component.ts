import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CodePrmoService} from "../services/code-prmo.service";
import {CodePromo} from "../Model/CodePromo";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-code-promo',
  templateUrl: './update-code-promo.component.html',
  styleUrls: ['./update-code-promo.component.css']
})
export class UpdateCodePromoComponent implements OnInit {
  id: number;
  code:any;
  myForm: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private  service: CodePrmoService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      cle: new FormControl(),
      dateFin: new FormControl(),
      valeur: new FormControl(),
    });

    this.code = new CodePromo();
    this.id = this.route.snapshot.params['idCodePromo'];
   /* this.service.getCodebyid(this.id).subscribe(data => {
      console.log(data);
      this.code = data;
      }, error => console.log(error));*/
   this.route.paramMap.subscribe(next=>this.service.getCodebyid(this.id).subscribe(res=>{this.code=res}), error=>console.log(error));

  }

  updateCode(f: FormGroup) {
    this.code.idCodePomo= this.id;
    this.code.cle= f.value.cle;
    this.code.dateFin= f.value.dateFin;
    this.code.valeur= f.value.valeur;
    this.service.updateCode(this.code).subscribe(data => {
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
