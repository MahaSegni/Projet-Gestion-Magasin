import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GoogleChartsModule} from "angular-google-charts";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormReclamationComponent} from "./form-reclamation/form-reclamation.component";
import {FormReponsereclamationComponent} from "./form-reponsereclamation/form-reponsereclamation.component";
import {StatReclamationComponent} from "./stat-reclamation/stat-reclamation.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";


@NgModule({
  declarations: [
    ReclamationsComponent,
    FormReclamationComponent,
    FormReponsereclamationComponent,
    StatReclamationComponent,
    ReclamationComponent,
    ReponseReclamationComponent,
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleChartsModule,
    NgbModule,
  ]
})
export class ReclamationsModule { }
