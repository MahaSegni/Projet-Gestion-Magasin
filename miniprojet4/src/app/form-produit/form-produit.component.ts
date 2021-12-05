import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../Model/Produit";
import {CategorieProduit} from "../Model/CategorieProduit";
import {CategorieProduitService} from "../services/categorie-produit.service";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {

  constructor(private serviceCat:CategorieProduitService,private serviceimage:ImageService) { }
  FormP: FormGroup;
  P:Produit;
  catsproduit:any;
  catp:any;
  userFile:any;
  public imagePath:any;
  imgURL:any;
  InputImage:string  ="";
  InputImageext:string;
  @Output() addEvent=new EventEmitter<Produit>();
  @Input() updateProduct:Produit;

  ngOnInit(): void {
    let respCat= this.serviceCat.afficherCategoriesProduit().subscribe((data)=>this.catsproduit=data);

    if(this.updateProduct== null){
      this.FormP= new FormGroup({
        'idProduit': new FormControl('', ),
        'code': new FormControl('', [Validators.required]),
        'libelle': new FormControl('', [Validators.required]),
        'dateCreation': new FormControl('', [Validators.required]),
        'prixUnitaire': new FormControl('', [Validators.required]),
        'categorieProduit': new FormControl(this.catsproduit, ),
        'imageProduit': new FormControl('', ),
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
        'imageProduit': new FormControl(this.updateProduct.imageProduit, ),
        'quantiteEnStock': new FormControl(this.updateProduct.quantiteEnStock, [Validators.required]),
        'pourcentageRemise': new FormControl(this.updateProduct.pourcentageRemise, [Validators.required]),
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

    saveP(form:FormGroup){
      if(this.InputImage!=""){
        const formdata=new FormData();
        formdata.append('file',this.userFile,this.InputImage);
        this.serviceimage.postFileProd(formdata).subscribe();
      }
      var catpro:any;
      let respCatp = this.serviceCat.getCategorieProduit(form.value.categorieProduit).subscribe((data) => {
          this.catp = data
          catpro = new CategorieProduit(this.catp.idCategorieProduit, this.catp.libelle, this.catp.categorieProduitIcone);
          this.P=new Produit(form.value.idProduit,form.value.code,form.value.libelle,form.value.dateCreation,new Date(Date.now()),
            form.value.prixUnitaire,catpro  , this.InputImage, form.value.quantiteEnStock, form.value.pourcentageRemise);
          this.addEvent.emit(this.P)
        }
      );
    }

}
