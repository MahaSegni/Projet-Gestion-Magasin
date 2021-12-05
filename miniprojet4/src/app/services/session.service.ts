import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user : User;
  constructor() {
    this.user=new User(1,"test","test","Fidele");
   }
   getUser() : User{

     return this.user;
   }
   getSessionType():string{
     if (this.user.badge != '')
     {
      if (this.user.badge === 'Fidele' || this.user.badge === 'Ordinaire' || this.user.badge === 'Premium'){
        return 'USER';
      }
      else
      return 'MODERATEUR';
     }
     return 'NL';
   }
}
