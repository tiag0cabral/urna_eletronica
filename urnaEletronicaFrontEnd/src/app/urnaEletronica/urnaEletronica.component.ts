import { VotosService } from './../service/Votos.service';
import { Candidato } from './../../../models/candidatos.models';
import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../service/Candidatos.service';

@Component({
  selector: 'app-urnaEletronica',
  templateUrl: './urnaEletronica.component.html',
  styleUrls: ['./urnaEletronica.component.scss']
})
export class UrnaEletronicaComponent implements OnInit {

  rg: string = "";
  nome: string = "";
  numeroCandidato: number | undefined;

  listaDeCandidatos: any[] = [];

  constructor(private serviceCandidatos: CandidatosService, private serviceVoto: VotosService) { }

  public votar() {

    let isValidVote: boolean = false;
    let indexCandidato: number = -1;
    for (let i = 0; i < this.listaDeCandidatos.length; i++) {
      if (this.numeroCandidato == this.listaDeCandidatos[i].numero) {
       indexCandidato = i;
       isValidVote = true;
       break;
      }
    }

    if(isValidVote) {
      this.nome = this.listaDeCandidatos[indexCandidato].nome
    }

    const voto = {
      rg: this.rg,
      nome: this.nome,
      numeroCandidato: this.numeroCandidato
    }
    this.serviceVoto.adicionarVoto(voto).subscribe(
      (resultado) => {
        console.log(resultado);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.serviceCandidatos.getAllCandidatos().subscribe((candidatoServidor: Candidato[]) => {
      console.log(candidatoServidor);
      this.listaDeCandidatos = candidatoServidor;
    });
  }

}
