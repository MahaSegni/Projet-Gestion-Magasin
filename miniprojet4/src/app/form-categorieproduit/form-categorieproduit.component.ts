import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieProduit} from "../Model/CategorieProduit";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../Model/Produit";
import {CategorieProduitComponent} from "../categorie-produit/categorie-produit.component";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-form-categorieproduit',
  templateUrl: './form-categorieproduit.component.html',
  styleUrls: ['./form-categorieproduit.component.css']
})
export class FormCategorieproduitComponent implements OnInit {
  FormCat: FormGroup;
  CatP:CategorieProduit;
  userFile:any;
  public imagePath:any;
  imgURL:any;
  InputImage:string  ="";
  InputImageext:string;
  @Output() addEvent=new EventEmitter<CategorieProduit>();
  @Input() updateCatProduct:CategorieProduit;

  constructor(private serviceimage:ImageService) {}

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
  uploadFiles( event:any ) {
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
      //this.InputImageext=files.target.files[0].name.split('.')[1];
      this.userFile=file;
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(_event) =>{this.imgURL=reader.result}
    }
  }
  saveCatP(form:FormGroup){
    if(this.InputImage!=""){
      const formdata=new FormData();
      formdata.append('file',this.userFile,this.InputImage);
      this.serviceimage.postFileProd(formdata).subscribe();
    }
    this.CatP=new CategorieProduit(form.value.idCat,form.value.libelle,this.InputImage);
    this.addEvent.emit(this.CatP)
  }

}
