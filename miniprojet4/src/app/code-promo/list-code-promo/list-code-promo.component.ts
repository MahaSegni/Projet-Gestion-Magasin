import { Component, OnInit } from '@angular/core';
import {CodePromo} from "../../Model/CodePromo";
import {CodePromoService} from "../../services/code-promo.service";
import {SessionService} from "../../services/session.service";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-code-promo',
  templateUrl: './list-code-promo.component.html',
  styleUrls: ['./list-code-promo.component.css']
})
export class ListCodePromoComponent implements OnInit {
  showFormTemplate:Boolean;
  inputCodePromo: CodePromo;
  Codes:any;
  reverse:boolean = false;
  searchTerm: string = '';
  p:number =1 ;
  elementType: any;
  correctionLevel: any;
  value: any
  blueColor:any
  search1: string = '';
  constructor(private service:CodePromoService,private session:SessionService,private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate=false;
    let resp= this.service.afficherCodePromo().subscribe((data)=>this.Codes=data);
  }


    deleteCode(p:CodePromo){
      this.service.supprimerCodePromo(p.idCodePromo).subscribe();
      let resp=this.service.afficherCodePromo();
      resp.subscribe((res)=>this.Codes=res);
    }

  search(){
    if(this.searchTerm!=""){
      this.Codes= this.Codes.filter((r: { cle: string; })=> {
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
  appliquer(search1:string){
this.service.affecterCodePromo(this.getUserId(),search1).subscribe(()=>{
  this.router.navigate(['/factures/panier']);
  }

);
  }
  saveCodePromo(CodePromo: CodePromo){

    let resp= this.service.saveCodePromo(CodePromo).subscribe(()=>{
      this.service.afficherCodePromo().subscribe((data)=>{this.Codes=data;})
    });
    this.showFormTemplate=false;
  }
  genererQrCode(code: CodePromo){
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
    this.value = "votre code de promotion : "+ code.cle +  " réduction de : "+code.valeur+ "%";
    this.blueColor = '#040c44'
  }
  getUserType():string{
    return this.session.getSessionType();
  }
  getUserId():number{
    return this.session.getUser().idUser;
  }
  showForm()
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
  }

  updateForm(CodePromo:CodePromo)
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
    this.inputCodePromo=CodePromo;
  }

}
