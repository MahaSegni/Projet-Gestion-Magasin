import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import {PanierComponent} from "./panier/panier.component";
import { PanierVideComponent } from './panier-vide/panier-vide.component';
import {CommandeComponent} from "./commande/commande.component";
import {FormFactureComponent} from "./form-facture/form-facture.component";
import {FormDetailFactureComponent} from "./form-detail-facture/form-detail-facture.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FactureComponent} from "./facture/facture.component";
import {NgxPrintModule} from "ngx-print";
import {CodePromoModule} from "../code-promo/code-promo.module";


@NgModule({
  declarations: [
    FacturesComponent,
    PanierComponent,
    PanierVideComponent,
    CommandeComponent,
    FormFactureComponent,
    FormDetailFactureComponent,
    FactureComponent,


  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    CodePromoModule

  ]
})
export class FacturesModule { }
