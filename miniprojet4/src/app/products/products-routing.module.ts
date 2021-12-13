import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";

const routes: Routes = [{ path: '', component: ProductsComponent },
  {path:'categorieProduit' , component:CategorieProduitComponent},
  {path:'produit' , component:ProduitComponent},
  {path:'produit/:categoryid' , component:ProduitComponent},
  {path:'ajouterCategorie',component:FormCategorieproduitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
