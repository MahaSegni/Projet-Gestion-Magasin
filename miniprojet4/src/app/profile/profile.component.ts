import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user :User;
  afficher :boolean; 
  afficher2 :boolean; 
  afficher3 :boolean;
  constructor(private route : Router,private session:SessionService) { }
  
  ngOnInit(): void {
    this.afficher = false
    this.afficher2 = false
    this.afficher3 = false
    this.user = this.session.getUser();
       
  }
  displayForm(){
    this.afficher = true;
    this.afficher2 = true;
  }
  displayFormPsw(){
    this.afficher = true;
    this.afficher2 = false;
    this.afficher3 = true;
  }
  displayProfile(b:boolean){
    this.afficher = b;
    this.afficher2 = b;
  }
  displayProfile2(b:boolean){
    this.afficher = b;
    this.afficher3 = b;
  }

}
