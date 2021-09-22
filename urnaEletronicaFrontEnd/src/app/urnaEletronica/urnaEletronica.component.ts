import { Candidato } from './../../../models/candidatos.models';
import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../service/Candidatos.service';

@Component({
  selector: 'app-urnaEletronica',
  templateUrl: './urnaEletronica.component.html',
  styleUrls: ['./urnaEletronica.component.scss']
})
export class UrnaEletronicaComponent implements OnInit {

  listaDeCandidatos :any[] = [];

  constructor(private service :CandidatosService) { }

  ngOnInit() {
    this.service.getAllCandidatos().subscribe((candidatoServidor:Candidato[]) => {
      console.log(candidatoServidor);
      this.listaDeCandidatos = candidatoServidor;
    });
  }

}
