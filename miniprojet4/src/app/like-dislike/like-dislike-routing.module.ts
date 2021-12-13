import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeDislikeComponent } from './like-dislike.component';
import {ListLikeDislikeComponent} from "./list-like-dislike/list-like-dislike.component";

const routes: Routes = [{ path: '', component: LikeDislikeComponent },
  {path:'LikeDislike' , component:ListLikeDislikeComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeDislikeRoutingModule { }
