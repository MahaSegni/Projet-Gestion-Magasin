import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  loginError: boolean;
  connectionForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService, private route: Router, private session: SessionService) { }

  ngOnInit(): void {
    this.loginError = false;
    this.connectionForm = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        'psw': ['', Validators.required],
      }
    )
  }

  connecter(f: FormGroup) {
    let response = this.us.doConnection(f.value.email, f.value.psw);
    response.subscribe((data) => {
      if (data.idUser != 0) {
        this.session.setUser(data)
        this.loginError = false;
        this.route.navigate(['/home']);
      } else {
        this.loginError = true;
      }
    });
  }



}
