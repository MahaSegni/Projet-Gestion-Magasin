import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user : User
  @Output() notification = new EventEmitter<User>();
  constructor(private session:SessionService) { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.notification.emit(this.user)
  }

}
