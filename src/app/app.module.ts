import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import {CodePromoComponent} from "./app-code-promo/code-promo/code-promo.component";
import {HttpClientModule} from "@angular/common/http";
import { CreateCodePromoComponent } from './app-code-promo/create-code-promo/create-code-promo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateCodePromoComponent } from './app-code-promo/update-code-promo/update-code-promo.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {CategorieProduitComponent} from "./categorie-produit/categorie-produit.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";
import {FormCategorieproduitComponent} from "./form-categorieproduit/form-categorieproduit.component";
import {FormProduitComponent} from "./form-produit/form-produit.component";
import {FormReclamationComponent} from "./form-reclamation/form-reclamation.component";
import {FormReponsereclamationComponent} from "./form-reponsereclamation/form-reponsereclamation.component";
import {ProduitComponent} from "./produit/produit.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    CodePromoComponent,
    CreateCodePromoComponent,
    UpdateCodePromoComponent,
    LikeDislikeComponent,
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
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgxQRCodeModule,
        Ng2OrderModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
