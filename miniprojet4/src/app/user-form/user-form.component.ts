import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userModificationForm : FormGroup
  @Input() user : User
  @Output() notification = new EventEmitter<boolean>();
  constructor(private fb:FormBuilder, private us : UserService, private session: SessionService) { }

  ngOnInit(): void {
    this.userModificationForm = this.fb.group(
      {
        'nom' : [this.user.nom,[Validators.required]],
        'prenom' : [this.user.prenom,[Validators.required]],
        'datenaissance' : [this.user.dateNaissance,[Validators.required]],
      }
    )
  }
  notifyParent(){
    this.notification.emit(false);
  }
  update(f:FormGroup){
    this.user.nom = f.value.nom;
    this.user.prenom = f.value.prenom;
    this.user.dateNaissance = f.value.datenaissance;
    let response =this.us.updateUser(this.user);
    response.subscribe((data)=>
    {
      this.session.setUser(this.user);
    });
    this.notifyParent();
  }

}
