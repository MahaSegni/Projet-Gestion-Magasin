import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePromoComponent } from './code-promo.component';
import {ListCodePromoComponent} from "./list-code-promo/list-code-promo.component";
import {FormCodePromoComponent} from "./form-code-promo/form-code-promo.component";

const routes: Routes = [{ path: '', component: CodePromoComponent },
  {path:'codepromo' , component:ListCodePromoComponent},
  {path:'addCodePromo',component:FormCodePromoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodePromoRoutingModule { }
