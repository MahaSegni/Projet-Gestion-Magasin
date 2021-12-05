import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodePromoComponent} from "./app-code-promo/code-promo/code-promo.component";
import {CommonModule} from "@angular/common";
import {CreateCodePromoComponent} from "./app-code-promo/create-code-promo/create-code-promo.component";
import {UpdateCodePromoComponent} from "./app-code-promo/update-code-promo/update-code-promo.component";
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {ProduitComponent} from "./produit/produit.component";
import {LikeDislikeComponent} from "./like-dislike/like-dislike.component";


const routes: Routes = [
  {path:'codepromo', component: CodePromoComponent},
  {path:'AddCodePromo', component: CreateCodePromoComponent},
  {path:'UpdateCodePromo/:idCodePromo', component: UpdateCodePromoComponent},
  /* {path:'produit', component: ProduitComponent},*/
   {path:'wishlist/:idProduit', component: LikeDislikeComponent},
  {path:'categorieProduit' , component:CategorieProduitComponent},
  {path:'produit' , component:ProduitComponent},
  {path:'produit/:categoryid' , component:ProduitComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'espaceReclamation/:Recid',component:ReponseReclamationComponent},
  {path:'ajouterCategorie',component:FormCategorieproduitComponent},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
