import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { FactureComponent } from './facture/facture.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ProduitComponent} from "./produit/produit.component";
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {FormProduitComponent} from "./form-produit/form-produit.component";
import { CommandeComponent } from './commande/commande.component';
import { FormFactureComponent } from './form-facture/form-facture.component';
import { FormDetailFactureComponent } from './form-detail-facture/form-detail-facture.component';
import { PanierComponent } from './panier/panier.component';
import {NotifierModule} from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    FactureComponent,
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    CategorieProduitComponent,
    ProduitComponent,
    ReclamationComponent,
    ReponseReclamationComponent,
    FormCategorieproduitComponent,
    FormProduitComponent,
    CommandeComponent,
    FormFactureComponent,
    FormDetailFactureComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
