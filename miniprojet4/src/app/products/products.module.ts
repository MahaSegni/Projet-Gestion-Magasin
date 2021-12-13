import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GoogleChartsModule} from "angular-google-charts";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {FormProduitComponent} from "./form-produit/form-produit.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {NotifierModule} from "angular-notifier";


@NgModule({
  declarations: [
    ProductsComponent,
    CategorieProduitComponent,
    ProduitComponent,
    FormProduitComponent,
    FormCategorieproduitComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12,
        },
        vertical: {
          position: 'top',
          distance: 100,
          gap: 10,
        },
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4,
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease',
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50,
        },
        shift: {
          speed: 300,
          easing: 'ease',
        },
        overlap: 150,
      },
    }),
  ]
})
export class ProductsModule { }
