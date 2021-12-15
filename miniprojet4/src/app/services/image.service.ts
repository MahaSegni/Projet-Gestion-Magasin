import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class imageService {

  constructor(private httpClient : HttpClient, private session:SessionService) { }

  postFileRec(file: FormData):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/reclamation/uploadImage';
    return this.httpClient.post(endpoint, file);
  }

  postFileProd(file: FormData):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/product/uploadImage';
    return this.httpClient.post(endpoint, file);
  }
  postFileUser(file: FormData,id : Number):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/user/uploadImage/'+id;
    return this.httpClient.post(endpoint, file,{headers: new HttpHeaders().set('authorisation', this.session.getUser().token)});
  }
}
