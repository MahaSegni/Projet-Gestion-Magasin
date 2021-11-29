import { Component } from '@angular/core';
import {SessionService} from "./services/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniprojet4';
  constructor(private session:SessionService) {
  }
  getUserType():string{

    return this.session.getSessionType();
  }
}
