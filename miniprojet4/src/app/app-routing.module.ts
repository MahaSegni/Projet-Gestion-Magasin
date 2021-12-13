import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {CategorieProduitComponent} from "./products/categorie-produit/categorie-produit.component";
import {ProduitComponent} from "./products/produit/produit.component";
import {ReclamationComponent} from "./reclamations/reclamation/reclamation.component";
import {ReponseReclamationComponent} from "./reclamations/reponse-reclamation/reponse-reclamation.component";
import {FormCategorieproduitComponent} from "./products/form-categorieproduit/form-categorieproduit.component";
import {StatReclamationComponent} from "./reclamations/stat-reclamation/stat-reclamation.component";

const routes: Routes = [

  {path : 'home', component: HomeComponent},


  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  { path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },

  { path: 'factures', loadChildren: () => import('./factures/factures.module').then(m => m.FacturesModule) },

  { path: 'CodePromo', loadChildren: () => import('./code-promo/code-promo.module').then(m => m.CodePromoModule) },

  { path: 'LikeDislike', loadChildren: () => import('./like-dislike/like-dislike.module').then(m => m.LikeDislikeModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
