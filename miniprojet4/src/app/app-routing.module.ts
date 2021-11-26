import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainUserComponent } from './main-user/main-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'inscription', component: InscriptionComponent},
  {path : 'connection', component: ConnectionComponent},
  {path : 'home', component: HomeComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'users', component: MainUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
