import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodePromoComponent} from "./code-promo/code-promo.component";
import {CommonModule} from "@angular/common";
import {CreateCodePromoComponent} from "./create-code-promo/create-code-promo.component";
import {UpdateCodePromoComponent} from "./update-code-promo/update-code-promo.component";
import {LikeDislikeComponent} from "./like-dislike/like-dislike.component";

const routes: Routes = [
  {path:'codepromo', component: CodePromoComponent},
  {path:'AddCodePromo', component: CreateCodePromoComponent},
  {path:'UpdateCodePromo/:idCodePromo', component: UpdateCodePromoComponent},

  {path:'like', component: LikeDislikeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
