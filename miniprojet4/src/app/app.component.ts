import { Component } from '@angular/core';
import { User } from './Model/user';
import {SessionService} from "./services/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniprojet4';
  user2: User;
  data: any;
  constructor(private session:SessionService) {
  }
  getUserType():string{
    return this.session.getSessionType();
  }
}
