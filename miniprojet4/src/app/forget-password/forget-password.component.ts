import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  displayEmail : boolean;
  displayCode : boolean;
  displayUpdate : boolean;
  constructor(private fb : FormBuilder, private us:UserService) { }
  forgetPswForm : FormGroup

  ngOnInit(): void {
    this.displayEmail = true;
    this.displayCode = false;
    this.displayUpdate = false;
    this.forgetPswForm = this.fb.group(
      {
        'email': ['',[Validators.required,Validators.email]],
        'code': ['',Validators.required],
        'psw': ['',Validators.required],
        'confirmPsw': ['',Validators.required]
      }
    )

  }
  sendMail(){
    this.displayEmail = false;
this.displayCode = true;
  }

  confirmCode(){
    this.displayCode = false;
this.displayUpdate = true;
  }

  updatePsw(){

  }

}
