import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check1:boolean;
  check2:boolean;
  check3:boolean;
  check4:boolean;
  constructor(private session:SessionService) {
   }

  ngOnInit(): void {
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
  }
  changeCheck1(){
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
  }
  changeCheck2(){
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
  }
  changeCheck3(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
  }
  changeCheck4(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
  }
  getUserType():string{

    return this.session.getSessionType();
  }
}
