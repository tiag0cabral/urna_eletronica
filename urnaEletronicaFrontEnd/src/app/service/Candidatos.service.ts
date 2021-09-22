import { Candidato } from './../../../models/candidatos.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private url = "http://localhost:3001/candidatos"

  constructor(private  httpclient:HttpClient){}

  public getAllCandidatos():Observable<Candidato[]>{
    return this.httpclient.get<Candidato[]>(this.url)
   }
}
