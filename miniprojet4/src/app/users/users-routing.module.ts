import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainUserComponent } from './main-user/main-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'uc', component: UsersComponent },
  {path: 'inscription', component: InscriptionComponent},
  {path : 'connexion', component: ConnectionComponent},
  {path : 'profile', component: ProfileComponent},
  {path : '', component: MainUserComponent},
  {path : 'forgetPassword', component: ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
