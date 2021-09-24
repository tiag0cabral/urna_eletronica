import { Apuracao } from './../../../models/apuracao.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApuracaoService {
  private url = 'http://localhost:3001/apuracao';

  constructor(private httpclient: HttpClient) {}

  public getAllApuracao(token:string): Observable<Apuracao[]> {
    const headers = { "x-access-token": token};
    return this.httpclient.get<Apuracao[]>(this.url,{headers});
  }
}
