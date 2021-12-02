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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
