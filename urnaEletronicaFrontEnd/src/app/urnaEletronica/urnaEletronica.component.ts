import { VotosService } from './../service/Votos.service';
import { Candidato } from './../../../models/candidatos.models';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CandidatosService } from '../service/Candidatos.service';

@Component({
  selector: 'app-urnaEletronica',
  templateUrl: './urnaEletronica.component.html',
  styleUrls: ['./urnaEletronica.component.scss']
})
export class UrnaEletronicaComponent implements OnInit {

  imgCandidatoAtual: string = "";
  nomeCandidatoAtual: string = "";
  numeroCandidatoAtual: number | string = "";

  // Informações do voto
  rg: string = "";
  nome: string = "";
  numeroCandidato: number | undefined;

  listaDeCandidatos: any[] = [];

  constructor(private serviceCandidatos: CandidatosService, private serviceVoto: VotosService, private element: ElementRef, private render: Renderer2) { }

  ngOnInit() {

    this.obterInformacoesCandNaoIdentificado();

    this.serviceCandidatos.getAllCandidatos().subscribe((candidatoServidor: Candidato[]) => {
      console.log(candidatoServidor);
      this.listaDeCandidatos = candidatoServidor;
    });
  }

  @HostListener("input", ["$event.target.value"]) onInput(numeroCand: number | string): void {

    let find: any = this.listaDeCandidatos.find(candidato => candidato.numero == numeroCand);

    if (find === undefined) {
      this.obterInformacoesCandNaoIdentificado();
    } else {
      this.imgCandidatoAtual = (find.urlImagem) as string;
      this.nomeCandidatoAtual = (find.nome) as string;
      this.numeroCandidatoAtual = (find.numero) as string;
    }

  }

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

  private setTextColor(color: string) {
    this.render.setStyle(this.element.nativeElement, "background-color", color);
  }

private obterInformacoesCandNaoIdentificado(): void {
  this.imgCandidatoAtual = "http://localhost:3001/img/votoIndefinido/candidato-nao-identificado.jpg";
  this.nomeCandidatoAtual = "Candidato(a) não identificado(a)";
  this.numeroCandidatoAtual = "----";
}

}
