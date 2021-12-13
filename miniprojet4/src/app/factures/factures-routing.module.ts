import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturesComponent } from './factures.component';
import {PanierComponent} from "./panier/panier.component";
import {CommandeComponent} from "./commande/commande.component";
import {FactureComponent} from "./facture/facture.component";
const routes: Routes = [
  {path:'panier',component:PanierComponent},
  {path:'commande',component:CommandeComponent},
  {path:'facture',component:FactureComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
