import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Reclamation} from "../Model/Reclamation";
import {ReponseReclamation} from "../Model/ReponseReclamation";
import {SessionService} from "../services/session.service";
import {User} from "../Model/user";
import {CategorieProduit} from "../Model/CategorieProduit";
import {CategorieProduitService} from "../services/categorie-produit.service";
import {ReclamationService} from "../services/reclamation.service";
import {Produit} from "../Model/Produit";
import {ImageService} from "../services/image.service";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-form-reponsereclamation',
  templateUrl: './form-reponsereclamation.component.html',
  styleUrls: ['./form-reponsereclamation.component.css']
})
export class FormReponsereclamationComponent implements OnInit {
  FormRepRec: FormGroup;
  RepRec:ReponseReclamation;
  userFile:any;
  public imagePath:any;
  imgURL:any;

  InputImage:string  ="";
  InputImageext:string;
  @Output() addEvent=new EventEmitter<ReponseReclamation>();
  @Input() updateRepRec:ReponseReclamation;
  @Input() rec:Reclamation;

  constructor(private session:SessionService,private serviceRec:ReclamationService,private serviceimage:ImageService) { }

  ngOnInit(): void {
    if(this.updateRepRec== null){
      this.FormRepRec= new FormGroup({
        'idReponseReclamation': new FormControl('', ),
        'reponse': new FormControl('', [Validators.required]),
        'imageReponseReclamation': new FormControl('', ),
      })}
    else{

      this.FormRepRec= new FormGroup({
        'idReponseReclamation': new FormControl(this.updateRepRec.idReponseReclamation, ),
        'reponse': new FormControl(this.updateRepRec.reponse, [Validators.required]),
        'imageReponseReclamation': new FormControl(this.updateRepRec.imageReponseReclamation, ),
      })
    }
  }

  uploadFiles( event:any ) {
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
      //   this.InputImageext=files.target.files[0].name.split('.')[1];
      this.userFile=file;
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(_event) =>{this.imgURL=reader.result}
    }
  }

  saveRepRec(form:FormGroup){
    if(this.InputImage!=""){
      const formdata=new FormData();
      formdata.append('file',this.userFile,this.InputImage);
      this.serviceimage.postFileRec(formdata).subscribe();
    }


    this.RepRec=new ReponseReclamation(form.value.idReponseReclamation,form.value.reponse,this.InputImage,
     new Date(Date.now()),this.session.getUser(),this.rec,this.rec.idReclamation);

    this.addEvent.emit(this.RepRec)

  }




}
