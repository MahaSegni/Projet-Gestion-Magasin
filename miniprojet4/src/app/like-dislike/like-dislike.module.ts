import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeDislikeRoutingModule } from './like-dislike-routing.module';
import { LikeDislikeComponent } from './like-dislike.component';
import {ListLikeDislikeComponent} from "./list-like-dislike/list-like-dislike.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    LikeDislikeComponent,
    ListLikeDislikeComponent
  ],
  imports: [
    CommonModule,
    LikeDislikeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class LikeDislikeModule { }
