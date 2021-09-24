import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autenticacao } from 'models/autenticacao.models';
import { Login } from 'models/login.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = 'http://localhost:3001/login'

 constructor(private httpClient: HttpClient) { }

 public enviarLogin(informacoesDeAcesso: any): Observable<Autenticacao> {
  return this.httpClient.post<Autenticacao>(this._url, informacoesDeAcesso);
 }


}
