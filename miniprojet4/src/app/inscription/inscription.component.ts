import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  codeI: string ;
  registerForm: boolean
  error: boolean
  message: any;
  user: User = new User();
  inscriptionForm: FormGroup
  constructor(private fb: FormBuilder, private us: UserService, private route: Router) { }

  ngOnInit(): void {
    this.error = false
    this.registerForm = true
    this.inscriptionForm = this.fb.group(
      {
        'nom': ['', [Validators.required]],
        'prenom': ['', [Validators.required]],
        'datenaissance': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'psw': ['', Validators.required],
        'confirmPsw': ['', Validators.required],
        'code': ['']
      }
    )
  }
  inscription(f: FormGroup) {
    
    this.user.nom = f.value.nom;
    this.user.prenom = f.value.prenom;
    this.user.dateNaissance = f.value.datenaissance;
    this.user.email = f.value.email;
    this.user.password = f.value.psw;
    this.user.urlpicture = "";
    this.user.token = "";
    this.user.badge = "Ordinaire";
    this.user.promoActive = false;
    let response = this.us.sendMail(f.value.email)
    response.subscribe((data) => {
      this.codeI = data}
    )
    this.registerForm = false;
    
    /*let response =this.us.doRegistration(this.user);
    response.subscribe();
    this.route.navigate(['/connection']);*/
  }
  confirmerCode() {
    console.log(this.codeI)
    console.log(this.inscriptionForm.value.code)
    if (this.inscriptionForm.value.code === this.codeI) {
      let response = this.us.doRegistration(this.user);
      response.subscribe();
      this.route.navigate(['/connection']);
    }else{
      this.error = true;
    }

  }
}
