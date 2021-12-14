import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodePromoRoutingModule } from './code-promo-routing.module';
import { CodePromoComponent } from './code-promo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {ListCodePromoComponent} from "./list-code-promo/list-code-promo.component";
import {FormCodePromoComponent} from "./form-code-promo/form-code-promo.component";
import { FormFrontCodePromoComponent } from './form-front-code-promo/form-front-code-promo.component';


@NgModule({
  declarations: [
    CodePromoComponent,
    ListCodePromoComponent,
    FormCodePromoComponent,
    FormFrontCodePromoComponent
  ],
  exports: [
    FormFrontCodePromoComponent
  ],
  imports: [
    CommonModule,
    CodePromoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxQRCodeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]
})
export class CodePromoModule { }
