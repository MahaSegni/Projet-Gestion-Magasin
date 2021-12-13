import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsComponent } from './reclamations.component';
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReponseReclamationComponent} from "./reponse-reclamation/reponse-reclamation.component";
import {StatReclamationComponent} from "./stat-reclamation/stat-reclamation.component";

const routes: Routes = [{ path: '', component: ReclamationsComponent },
  {path:'reclamation' , component:ReclamationComponent},
  {path:'espaceReclamation/:Recid',component:ReponseReclamationComponent},
  {path:'statReclamation',component:StatReclamationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRoutingModule { }
