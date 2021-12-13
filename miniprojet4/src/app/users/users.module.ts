import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UpdatePswFormComponent } from './update-psw-form/update-psw-form.component';
import { MainUserComponent } from './main-user/main-user.component';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    UserFormComponent,
    UpdatePswFormComponent,
    MainUserComponent,
    UserComponent,
    ForgetPasswordComponent,
    InscriptionComponent,
    ConnectionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
