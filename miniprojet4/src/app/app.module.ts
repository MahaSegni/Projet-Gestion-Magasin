import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';
import { HttpClientModule} from "@angular/common/http";
import { ProduitComponent } from './produit/produit.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReponseReclamationComponent } from './reponse-reclamation/reponse-reclamation.component';

import { FormCategorieproduitComponent } from './form-categorieproduit/form-categorieproduit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormProduitComponent} from "./form-produit/form-produit.component";
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { FormReponsereclamationComponent } from './form-reponsereclamation/form-reponsereclamation.component';

@NgModule({
  declarations: [
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
    FormReclamationComponent,
    FormReponsereclamationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
