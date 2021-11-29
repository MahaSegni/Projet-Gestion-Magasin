import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    constructor() {

  }
  getUser(): User {
    let user: User
    let data: any;
    data = localStorage.getItem('user');
    user = JSON.parse(data)
    return user
  }

  setUser(u: User) {
    localStorage.setItem('user', JSON.stringify(u))
  }

  getSessionType(): string {
    let user = this.getUser()
    if (user != null) {
      if (user.badge === 'Fidele' || user.badge == "Ordinaire" || user.badge === 'Premium') {
        return 'USER';
      }
      else if (user.badge === 'Moderateur')
        return 'MODERATEUR';
      else
        return 'NL';
    }
    return 'NL';
  }

  clearSession(){
    localStorage.clear();
  }

  


}
