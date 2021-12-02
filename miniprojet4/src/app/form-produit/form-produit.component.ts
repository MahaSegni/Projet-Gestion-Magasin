import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../Model/Produit";
import {CategorieProduit} from "../Model/CategorieProduit";
import {CategorieProduitService} from "../services/categorie-produit.service";

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {

  constructor(private serviceCat:CategorieProduitService) { }
  FormP: FormGroup;
  P:Produit;
  catsproduit:any;
  catp:any;
  @Output() addEvent=new EventEmitter<Produit>();
  @Input() updateProduct:Produit;

  ngOnInit(): void {
    let respCat= this.serviceCat.afficherCategoriesProduit().subscribe((data)=>this.catsproduit=data);
console.log(this.catsproduit);
    if(this.updateProduct== null){
      this.FormP= new FormGroup({
        'idProduit': new FormControl('', ),
        'code': new FormControl('', [Validators.required]),
        'libelle': new FormControl('', [Validators.required]),
        'dateCreation': new FormControl('', [Validators.required]),
        'prixUnitaire': new FormControl('', [Validators.required]),
        'categorieProduit': new FormControl(this.catsproduit, ),
        'imageProduit': new FormControl('', [Validators.required]),
        'quantiteEnStock': new FormControl('', [Validators.required]),
        'pourcentageRemise': new FormControl('', [Validators.required]),
      })}
    else{
      this.FormP= new FormGroup({
        'idProduit': new FormControl(this.updateProduct.idProduit, ),
        'code': new FormControl(this.updateProduct.code, [Validators.required]),
        'libelle': new FormControl(this.updateProduct.libelle, [Validators.required]),
        'dateCreation': new FormControl(this.updateProduct.dateCreation, [Validators.required]),
        'prixUnitaire': new FormControl(this.updateProduct.prixUnitaire, [Validators.required]),
        'categorieProduit': new FormControl(this.updateProduct.categorieProduit, ),
        'imageProduit': new FormControl(this.updateProduct.imageProduit, [Validators.required]),
        'quantiteEnStock': new FormControl(this.updateProduct.quantiteEnStock, [Validators.required]),
        'pourcentageRemise': new FormControl(this.updateProduct.pourcentageRemise, [Validators.required]),
      })
    }
  }

  saveP(form:FormGroup){
    var catpro:any;
    let respCatp = this.serviceCat.getCategorieProduit(form.value.categorieProduit).subscribe((data) => {
      this.catp = data
      catpro = new CategorieProduit(this.catp.idCategorieProduit, this.catp.libelle, this.catp.categorieProduitIcone);
        this.P=new Produit(form.value.idProduit,form.value.code,form.value.libelle,form.value.dateCreation,new Date(Date.now()),
          form.value.prixUnitaire,catpro  , form.value.imageProduit, form.value.quantiteEnStock, form.value.pourcentageRemise);
        console.log(catpro)
        this.addEvent.emit(this.P)
      }
    );
    }

}
