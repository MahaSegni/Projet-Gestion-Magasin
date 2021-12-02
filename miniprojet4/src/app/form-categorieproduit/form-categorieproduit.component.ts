import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieProduit} from "../Model/CategorieProduit";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../Model/Produit";
import {CategorieProduitComponent} from "../categorie-produit/categorie-produit.component";

@Component({
  selector: 'app-form-categorieproduit',
  templateUrl: './form-categorieproduit.component.html',
  styleUrls: ['./form-categorieproduit.component.css']
})
export class FormCategorieproduitComponent implements OnInit {
  FormCat: FormGroup;
  CatP:CategorieProduit;
  @Output() addEvent=new EventEmitter<CategorieProduit>();
  @Input() updateCatProduct:CategorieProduit;

  constructor() {}

  ngOnInit(): void {
    if(this.updateCatProduct== null){
      this.FormCat= new FormGroup({
        'idCat': new FormControl('', ),
        'libelle': new FormControl('', [Validators.required]),
        'icone': new FormControl('', ),
      })}
    else{
      this.FormCat= new FormGroup({
        'idCat': new FormControl(this.updateCatProduct.idCategorieProduit, ),
        'libelle': new FormControl(this.updateCatProduct.libelle, [Validators.required]),
        'icone': new FormControl(this.updateCatProduct.categorieProduitIcone, ),
      })
    }
  }
  saveCatP(form:FormGroup){
    this.CatP=new CategorieProduit(form.value.idCat,form.value.libelle,form.value.icone);
    this.addEvent.emit(this.CatP)
  }

}
