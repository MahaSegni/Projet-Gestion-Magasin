import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReponseReclamation} from "./Model/ReponseReclamation";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";

const routes: Routes = [
  {path:'categorieProduit' , component:CategorieProduitComponent},
  {path:'produit' , component:ProduitComponent},
  {path:'produit/:categoryid' , component:ProduitComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'espaceReclamation/:Recid',component:ReponseReclamationComponent},
  {path:'ajouterCategorie',component:FormCategorieproduitComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

