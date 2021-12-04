import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( private httpClient:HttpClient){ }

  postFileRec(file: FormData):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/reclamation/uploadImage';
    return this.httpClient.post(endpoint, file);
  }

  postFileProd(file: FormData):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/product/uploadImage';
    return this.httpClient.post(endpoint, file);
  }
}
