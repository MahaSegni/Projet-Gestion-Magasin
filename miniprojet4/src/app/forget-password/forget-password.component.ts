import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  pswUpdated : boolean;
  codeI : string;
  errorCode : boolean;
  errorEmail : boolean;
  displayEmail : boolean;
  displayCode : boolean;
  displayUpdate : boolean;
  constructor(private fb : FormBuilder, private us:UserService, private route : Router) { }
  forgetPswForm : FormGroup

  ngOnInit(): void {
    this.pswUpdated = false;
    this.errorEmail = false;
    this.errorCode = false;
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
    let resp = this.us.checkUser(this.forgetPswForm.value.email);
    resp.subscribe((data) => 
    {
      if (data == false) 
      {
        this.errorEmail = true;
      }else 
      {
        let response = this.us.sendMail(this.forgetPswForm.value.email)
        response.subscribe((data) => {
          this.codeI = data
        }) 
        this.displayEmail = false;
        this.displayCode = true; 
      }
    })
    
  }

  confirmCode(){
    if (this.forgetPswForm.value.code === this.codeI) {
      this.displayCode = false;
      this.displayUpdate = true;
    }else{
      this.errorCode = true;
    }
    
  }

  updatePsw(){
    let user = new User();
    user.email = this.forgetPswForm.value.email;
    user.password = this.forgetPswForm.value.psw;
    user.badge = "Ordinaire";
    console.log(user);
    let response = this.us.forgetPassword(user);
    response.subscribe();
    this.route.navigate(['/connection']);
    
  }

}
