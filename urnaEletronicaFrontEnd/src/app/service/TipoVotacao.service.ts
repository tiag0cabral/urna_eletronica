import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVotacao } from 'models/tipoVotacao.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVotacaoService {

  private url = "http://localhost:3001/tipoDeVotacao"

  constructor(private  httpclient:HttpClient){}

  public getTipoVotacao():Observable<TipoVotacao[]>{
    return this.httpclient.get<TipoVotacao[]>(this.url)
   }

}
