import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Facture} from "../../Model/Facture";
import {FactureService} from "../../services/facture.service";
import {DetailFacture} from "../../Model/detailFacture";
import {CodePromoService} from "../../services/code-promo.service";
import {SessionService} from "../../services/session.service";
import {User} from "../../Model/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-form-facture',
  templateUrl: './form-facture.component.html',
  styleUrls: ['./form-facture.component.css']
})
export class FormFactureComponent implements OnInit {
  @Input() facture:Facture;
  @Output() addEvent=new EventEmitter<Facture>();


  FormFacture: FormGroup;
  afficherFormCodePromo:boolean=false;
  usercodepromo:boolean;
  user:User;
  showerreur=false;
  constructor(private factureService:FactureService,private serviseCodePromo: CodePromoService, private session:SessionService,
              private userService:UserService) {
  }

  ngOnInit(): void {

    this.usercodepromo=this.session.getUser().codepromo!=null;
    this.user=this.session.getUser();
    if(this.user.codepromo!=null){
      this.facture.montantFacture=this.facture.montantFacture-(this.facture.montantFacture*this.user.codepromo.valeur/100);
    }
    this.FormFacture= new FormGroup({
      'dateFacture': new FormControl({value: this.facture.dateFacture.toString(), disabled: true},[] ),
      'userFacture': new FormControl({value:this.facture.user.email,disabled:true}),
      'montantFacture':new FormControl({value:this.facture.montantFacture,disabled:true}
      )
    });
  }
  changeMontat(){
    if(this.facture.detailFacture.findIndex((d)=>d.qte<=0)>-1){
      this.showerreur=true;

    }else {
      this.showerreur=false;
      this.factureService.calculeMontat(this.facture)
      if (this.user.codepromo != null) {
        this.facture.montantFacture = this.facture.montantFacture - (this.facture.montantFacture * this.user.codepromo.valeur / 100);
      }
      this.FormFacture.setValue({
        'dateFacture': this.facture.dateFacture.toString(),
        'userFacture': this.facture.user.email,
        'montantFacture': this.facture.montantFacture
      });
    }
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
  getUserId():number{
    return this.session.getUser().idUser;
  }
  addCodePromo(code:string){
    this.serviseCodePromo.affecterCodePromo(this.getUserId(),code).subscribe(()=>{
      let user=this.userService.getUser(this.getUserId()).subscribe((u)=>{
        this.session.setUser(u);
        this.usercodepromo=this.session.getUser().codepromo!=null;
        this.facture.montantFacture=this.facture.montantFacture-(this.facture.montantFacture*this.user.codepromo.valeur/100);
      });

    })

  }
}

