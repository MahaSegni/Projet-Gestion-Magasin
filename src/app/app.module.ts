import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import {CodePromoComponent} from "./code-promo/code-promo.component";
import {HttpClientModule} from "@angular/common/http";
import { CreateCodePromoComponent } from './create-code-promo/create-code-promo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateCodePromoComponent } from './update-code-promo/update-code-promo.component';
import {FilterPipe} from "./code-promo/filter.pipe";
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    CodePromoComponent,
    CreateCodePromoComponent,
    UpdateCodePromoComponent,
    FilterPipe,
    LikeDislikeComponent,
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
