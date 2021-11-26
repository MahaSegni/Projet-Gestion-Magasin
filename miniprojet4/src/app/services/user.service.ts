import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  public doRegistration(user: User){
    return this.http.post("http://localhost:8080/SpringMVC/user/add-user",user,{responseType:'text' as 'json'});
  }
  public doConnection(email:string,psw:string): Observable<User>{
    return this.http.get<User>("http://localhost:8080/SpringMVC/user/connection/"+email+"/"+psw);
  }
  public doConnection2(user: User){
    return this.http.post("http://localhost:8080/SpringMVC/user/connection2",user,{responseType:'text' as 'json'});
  }
  
  public checkPsw(id:number,psw:string): Observable<Boolean>{
    return this.http.get<Boolean>("http://localhost:8080/SpringMVC/user/check-password/"+id+"/"+psw);
  }

  public updateUser(user: User){
    return this.http.put("http://localhost:8080/SpringMVC/user/modify-user",user,{responseType:'text' as 'json'});
  }

  public getUser(id: number): Observable<User>{
    return this.http.get<User>("http://localhost:8080/SpringMVC/user/retrieve-user/"+id);
  }  

  public updateUserPassword(user: User){
    return this.http.put("http://localhost:8080/SpringMVC/user/change-password",user,{responseType:'text' as 'json'});
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/SpringMVC/user/retrieve-all-users");
  }

  public deleteUser(id : number){
    return this.http.delete("http://localhost:8080/SpringMVC/user/remove-user/"+id);
  }
}
