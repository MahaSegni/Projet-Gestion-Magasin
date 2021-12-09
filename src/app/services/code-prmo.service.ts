import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CodePromo} from "../Model/CodePromo";
import {Observable} from "rxjs";

const optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
    })
  };
@Injectable({
  providedIn: 'root'
})

export class CodePrmoService {
  CodePromoUrl:string='http://localhost:8080/SpringMVC/api/v1/codepromo/'
  constructor(private http:HttpClient) { }

  public getCode(){
    return this.http.get(this.CodePromoUrl);
  }
  public getCodebyid(id: number): Observable<Object> {
    return this.http.get<CodePromo>(this.CodePromoUrl+id);
  }
  addCode(code: Object): Observable<Object> {
    return this.http.post(`${this.CodePromoUrl}`, code);
  }
  public getCodebyDate(dateFin: Date): Observable<Object> {
    return this.http.get<CodePromo>(this.CodePromoUrl+dateFin);
  }
  deleteCode (code: CodePromo): Observable<CodePromo> {
    const url=this.CodePromoUrl+ code.idCodePomo;
    return this.http.delete<CodePromo>(url);
  }
  updateCode(code: CodePromo): Observable<Object> {
    return this.http.put<CodePromo>(this.CodePromoUrl+code.idCodePomo, code);
  }
}
