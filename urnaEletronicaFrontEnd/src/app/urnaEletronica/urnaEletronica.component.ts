import { Candidato } from './../../../models/candidatos.models';
import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../service/Candidatos.service';

@Component({
  selector: 'app-urnaEletronica',
  templateUrl: './urnaEletronica.component.html',
  styleUrls: ['./urnaEletronica.component.scss']
})
export class UrnaEletronicaComponent implements OnInit {

  constructor(private service :CandidatosService) { }

  ngOnInit() {
    this.service.getAllCandidatos().subscribe((candidatoServidor:Candidato[]) => {
      console.table(candidatoServidor);
    });
  }

}
