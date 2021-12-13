import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {CategorieProduitService} from "../../services/categorie-produit.service";
import {ProduitService} from "../../services/produit.service";
import {ActivatedRoute, NavigationStart} from "@angular/router";
import {CategorieProduit} from "../../Model/CategorieProduit";
import {Produit} from "../../Model/Produit";
import {NoteProduit} from "../../Model/NoteProduit";
import {NoteProduitService} from "../../services/note-produit.service";
import {NotifierModule, NotifierService} from "angular-notifier";
import {LikeDislike} from "../../Model/LikeDislike";
import {User} from "../../Model/user";
import {LikeDislikeService} from "../../services/like-dislike.service";
import {LikeDislikeComponent} from "../../like-dislike/like-dislike.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  listProduit:any
  listProduitFront:any
  showFormTemplate:boolean
  inputProduct: Produit;
  ProductInsideList:boolean=false;
  notifcounter=0;

  private readonly notifier: NotifierService;

  constructor(private route: ActivatedRoute,private service:ProduitService,private session:SessionService,private noteservice:NoteProduitService,    notifierService: NotifierService,private LikeDislikeService:LikeDislikeService) {
    this.notifier = notifierService;

  }

  ngOnInit(): void {

    this.showFormTemplate=false
    let resp=this.service.afficherProduit().subscribe((data)=> this.listProduit=data);

    this.route.paramMap.subscribe((params)=>{
      let resp1 = this.service.afficherProduitByCat(params.get('categoryid'),this.getUser().toString())
        .subscribe((data) =>{ this.listProduitFront = data; }

        );});

  }


  supprimerProd(id: number){
    let resp= this.service.supprimerProduit(id).subscribe(()=>{
      this.service.afficherProduit().subscribe((data)=>{this.listProduit=data;})
    });
  }


  updateRate(p:Produit)
  {  let note = p.note;
    let pr=p;
    pr.note=new NoteProduit();
    note.produit=pr;
    note.produit.note.noteproduit=4;




    this.route.paramMap.subscribe((params) => {
      this.noteservice.saveNote(note).subscribe();
      let resp1 = this.service.afficherProduitByCat(params.get('categoryid'), this.getUser().toString())
        .subscribe((data) => {
            this.listProduitFront = data;
          }
        );
    });





  }
  saveProduct(p: Produit){
    let resp= this.service.ajouterProduit(p).subscribe(()=>{
      this.service.afficherProduit().subscribe((data)=>{this.listProduit=data;})
    });
    this.showFormTemplate=false;
  }

  getUserType():string{
    return this.session.getSessionType();
  }
  getUser():number{
    return this.session.getUser().idUser;
  }

  showForm()
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
  }

  updateForm(p:Produit)
  {if (this.showFormTemplate===true)
    this.showFormTemplate=false;
  else this.showFormTemplate=true;
    this.inputProduct=p;
  }

  ajouterPanier(p:Produit){
    this.session.addToPanier(p,1);
    this.notifier.notify('info', 'vous pouvez maintenant visiter votre panier \n');
    this.notifcounter++;
    if(this.notifcounter==3){
      this.notifier.hideOldest();
    }
  }
  ProductInsidePanier(p:Produit):boolean{
    return this.session.getPanier().findIndex((e)=>e.produit.idProduit==p.idProduit)!=-1;
  }
  getUserr():User{
    return this.session.getUser();
  }
  wish(p:Produit){
    let like= new LikeDislike(0,this.getUserr(),p);
    p.valeur=true;
    let resp= this.service.ajouterProduit(p).subscribe();

    this.LikeDislikeService.saveLikeDislike(like).subscribe();
    this.notifier.notify('info', 'Article '+p.libelle+' est ajouté à la liste des favoris  \n');
    this.notifcounter++;
    if(this.notifcounter==3){
      this.notifier.hideOldest();
    }
  }



}
