import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FactureComponent} from "./facture/facture.component";
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";
import {CommandeComponent} from "./commande/commande.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  {path:'Facture', component: FactureComponent},
  {path:'categorieProduit' , component:CategorieProduitComponent},
  {path:'produit' , component:ProduitComponent},
  {path:'produit/:categoryid' , component:ProduitComponent},
  {path:'commande' , component:CommandeComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'espaceReclamation/:Recid',component:ReponseReclamationComponent},
  {path:'ajouterCategorie',component:FormCategorieproduitComponent},
  {path:'panier',component:PanierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
