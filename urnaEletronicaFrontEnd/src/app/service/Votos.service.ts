import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voto } from 'models/voto.models';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  private _listaVotos: any[] = [];

  private _url = "http://localhost:3001/voto";

  constructor(private httpclient: HttpClient) { }

  public get listaVotos(): any[] {
    return this._listaVotos;
  }

  public set listaVotos(value: any[]) {
    this._listaVotos = value;
  }

  public adicionarVoto(voto: any): Observable<Voto> {
    return this.httpclient.post<Voto>(this._url, voto);
  }
}
