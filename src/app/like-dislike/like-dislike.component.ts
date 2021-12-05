import { Component ,Input, OnInit, Output, EventEmitter} from '@angular/core';
import {WishlistService} from "../services/wishlist.service";
import {LikeDislike} from "../Model/LikeDislike";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieProduit} from "../Model/CategorieProduit";
import {Produit} from "../Model/Produit";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  @Input() wishlist:LikeDislike;
  @Output() addEvent=new EventEmitter<LikeDislike>();
  myForm: FormGroup;
  idProduit: any;   catp:any; P:Produit;
  constructor(private ProduitService: ProduitService,private service:WishlistService,private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.service.addCode(this.idProduit).subscribe(data => {
        console.log(data)


      },
      error => console.log(error));
  }


}
