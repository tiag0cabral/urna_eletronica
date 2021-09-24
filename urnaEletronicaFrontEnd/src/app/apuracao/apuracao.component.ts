import { Component, OnInit } from '@angular/core';
import { Apuracao } from 'models/apuracao.models';
import { ApuracaoService } from '../service/Apuracao.service';

@Component({
  selector: 'app-apuracao',
  templateUrl: './apuracao.component.html',
  styleUrls: ['./apuracao.component.scss']
})
export class ApuracaoComponent implements OnInit {

  listaApuracao: any[] = [];
  totalVotos: number = 0;

  constructor(private serviceApuracao: ApuracaoService) { }

  ngOnInit() {
    var token:string  = (localStorage.getItem("token")) as string
    this.serviceApuracao.getAllApuracao(token).subscribe((apuracaoServidor: Apuracao[]) => {
      console.log(apuracaoServidor);
      this.listaApuracao = apuracaoServidor;
     for (let i = 0; i < this.listaApuracao.length; i++) {
          this.totalVotos += this.listaApuracao[i].votos;
      }
    });

  }

}
