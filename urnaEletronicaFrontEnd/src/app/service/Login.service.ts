import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'models/login.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = 'http://localhost:3001/login'

 constructor(private httpClient: HttpClient) { }

 public enviarLogin(informacoesDeAcesso: any): Observable<Login> {
  return this.httpClient.post<Login>(this._url, informacoesDeAcesso);
 }

}
