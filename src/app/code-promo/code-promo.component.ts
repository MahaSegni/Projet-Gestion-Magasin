import { Component, OnInit } from '@angular/core';
import {CodePrmoService} from "../services/code-prmo.service";
import {HttpHeaders} from "@angular/common/http";
import {CodePromo} from "../Model/CodePromo";
import {Router} from "@angular/router";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

@Component({
  selector: 'app-code-promo',
  templateUrl: './code-promo.component.html',
  styleUrls: ['./code-promo.component.css']
})

export class CodePromoComponent implements OnInit {
codes: any;
  inputCategory: string;
  title = 'angular-text-search-highlight';
  searchText = '';
  elementType: any;
  correctionLevel: any;
  value: any
  blueColor:any
  searchTerm: string = '';
  p:number =1 ;
  reverse:boolean = false;
  constructor(private service:CodePrmoService,private router: Router) { }

  ngOnInit(): void {
    let resp=this.service.getCode();
resp.subscribe((res)=>this.codes=res);

  }
  deleteCode(p:CodePromo){
    this.service.deleteCode(p).subscribe();
    let resp=this.service.getCode();
    resp.subscribe((res)=>this.codes=res);
  }
  updateCode(idCodePomo:number){
    this.router.navigate(['UpdateCodePromo', idCodePomo]);
  }
  genererQrCode(code: CodePromo){
   this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
    this.value = "votre code de promotion : "+ code.cle +  " réduction de : "+code.valeur+ "%";
    this.blueColor = '#040c44'
  }

  search(){
   if(this.searchTerm!=""){
     this.codes= this.codes.filter((r: { cle: string; })=> {
       return r.cle.toLowerCase().match(this.searchTerm);
     });
     }else if (this.searchTerm == ""){
       this.ngOnInit();
     }
    }
  key:string  = 'id'
sort(key:string  = 'id'){
this.key= key;
this.reverse = !this.reverse;
}
}
