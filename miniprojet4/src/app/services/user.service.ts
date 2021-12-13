import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private session:SessionService) { 
    
  }
  
  public doRegistration(user: User){
    return this.http.post("http://localhost:8081/SpringMVC/user/add-user",user,{responseType:'text' as 'json'});
  }
  public doConnection(email:string,psw:string): Observable<User>{
    return this.http.get<User>("http://localhost:8081/SpringMVC/user/connection/"+email+"/"+psw);
  }
  
  public checkPsw(id:number,psw:string): Observable<Boolean>{
    return this.http.get<Boolean>("http://localhost:8081/SpringMVC/user/check-password/"+id+"/"+psw);
  }

  public updateUser(user: User){
    return this.http.put("http://localhost:8081/SpringMVC/user/modify-user",user,{responseType:'text' as 'json',headers: new HttpHeaders().set('authorization', this.session.getUser().token)});
  }

  public getUser(id: number): Observable<User>{
    return this.http.get<User>("http://localhost:8081/SpringMVC/user/retrieve-user/"+id,{headers: new HttpHeaders().set('authorization', this.session.getUser().token)});
  }  

  public updateUserPassword(user: User){
    return this.http.put("http://localhost:8081/SpringMVC/user/change-password",user,{responseType:'text' as 'json',headers: new HttpHeaders().set('authorization', this.session.getUser().token)});
  }

  public getUsers(id:number): Observable<User[]>{
    
    return this.http.get<User[]>("http://localhost:8081/SpringMVC/user/retrieve-all-users/"+id,{headers: new HttpHeaders().set('authorization', this.session.getUser().token)});
  }

  public deleteUser(id : number,aid : number){
    return this.http.delete("http://localhost:8081/SpringMVC/user/remove-user/"+id+"/"+aid,{headers: new HttpHeaders().set('authorization', this.session.getUser().token)});
  }

  public sendMail(email:string) : Observable<string>{
    return this.http.get<string>("http://localhost:8081/SpringMVC/user/verificationmail/"+email,{responseType:'text' as 'json'})
  }

  public checkUser(email:string) : Observable<Boolean>{
    return this.http.get<Boolean>("http://localhost:8081/SpringMVC/user/checkUser/"+email)
  }

  public forgetPassword(user: User): Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8081/SpringMVC/user/forgetPassword",user,{responseType:'text' as 'json'});
  }

  
}
