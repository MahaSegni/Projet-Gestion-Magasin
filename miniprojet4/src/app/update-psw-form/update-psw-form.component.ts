import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../Model/user';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-psw-form',
  templateUrl: './update-psw-form.component.html',
  styleUrls: ['./update-psw-form.component.css']
})
export class UpdatePswFormComponent implements OnInit {
  error : boolean
  modifiermdp : boolean
  @Input() user : User
  @Output() notification2 = new EventEmitter<boolean>();
  userPswForm : FormGroup
  constructor(private fb : FormBuilder, private us:UserService, private session : SessionService) { }

  ngOnInit(): void {
    this.modifiermdp = false;
    this.userPswForm = this.fb.group(
      {
        'pswactuel': ['',Validators.required],
        'psw': ['',Validators.required],
        'confirmPsw': ['',Validators.required]
      }
    )
  }
  confirmermdp(){ 
    let response =this.us.checkPsw(this.user.idUser,this.userPswForm.value.pswactuel);
    response.subscribe((data)=>
    {
      if(data == true)
      {
        this.error = false;
        this.modifiermdp = true;
      }else{
          this.error = true;
      }
    });
  }
  notifyParent(){
    this.notification2.emit(false);
  }

  updatePsw(f:FormGroup){
    this.user.password = f.value.psw
    let response =this.us.updateUserPassword(this.user);
    response.subscribe((data)=>
    {
      this.session.setUser(this.user);
    });
    this.notifyParent();
  }
}
