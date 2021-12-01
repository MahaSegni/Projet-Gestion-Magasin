import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  listUsers : User[]
  constructor(private us:UserService, private session:SessionService,private route:Router) { }

  ngOnInit(): void {
   /* if (this.session.getUser() == null){
      this.route.navigate(['/connection'])
    }
    else if (this.session.getUser().badge != 'Moderateur'){
      this.route.navigate(['/home'])
    }/*/
    let response =this.us.getUsers(this.session.getUser().idUser);
    response.subscribe((data)=>
    this.listUsers = (data)
    );
  }

  delete(u:User){
    let resp = this.us.deleteUser(u.idUser,this.session.getUser().idUser);
    resp.subscribe()    
    let i = this.listUsers.indexOf(u);
    this.listUsers.splice(i,1);

  }

}
