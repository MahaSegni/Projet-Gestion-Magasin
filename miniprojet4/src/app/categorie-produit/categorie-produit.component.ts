import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from "../services/session.service";
import {CategorieProduitService} from "../services/categorie-produit.service";
import {CategorieProduit} from "../Model/CategorieProduit";

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.css']
})
export class CategorieProduitComponent implements OnInit {
  showFormTemplate:Boolean;
  inputCatProduct: CategorieProduit;
  catsproduit:any;
  constructor(private service:CategorieProduitService,private session:SessionService) { }

  ngOnInit(): void {
    this.showFormTemplate=false;
    let resp= this.service.afficherCategoriesProduit().subscribe((data)=>this.catsproduit=data);
  }

  supprimerCatProd(id: number){
    let resp= this.service.supprimerCategorieProduit(id).subscribe(()=>{
      this.service.afficherCategoriesProduit().subscribe((data)=>{this.catsproduit=data;})
    });
  }

  saveCatProduct(catp: CategorieProduit){
    let resp= this.service.saveCategorieProduit(catp).subscribe(()=>{
      this.service.afficherCategoriesProduit().subscribe((data)=>{this.catsproduit=data;})
    });
  this.showFormTemplate=false;
  }

  getUserType():string{
    return this.session.getSessionType();
  }

  showForm()
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
  }

  updateForm(catp:CategorieProduit)
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
    this.inputCatProduct=catp;
  }
}
