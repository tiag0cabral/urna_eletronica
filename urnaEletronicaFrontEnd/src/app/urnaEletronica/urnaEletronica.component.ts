import { TipoVotacao } from 'models/tipoVotacao.models';
import { VotosService } from './../service/Votos.service';
import { Candidato } from './../../../models/candidatos.models';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CandidatosService } from '../service/Candidatos.service';
import { TipoVotacaoService } from '../service/TipoVotacao.service';

@Component({
  selector: 'app-urnaEletronica',
  templateUrl: './urnaEletronica.component.html',
  styleUrls: ['./urnaEletronica.component.scss']
})
export class UrnaEletronicaComponent implements OnInit {

  @ViewChild('tagsRg', {static: false}) tagsRg!: ElementRef;
  @ViewChild('inputRg', {static: false}) inputRg!: ElementRef;

  imgCandidatoAtual: string = "";
  nomeCandidatoAtual: string = "";
  numeroCandidatoAtual: number | string = "";

  // Informações do voto
  rg: string = "";
  nome: string = "";
  numeroCandidato: number | string | undefined;

  listaDeCandidatos: any[] = [];

  listaTipoVotacao: any[] = [];

  ehVotoBranco: boolean = false;

  constructor(private serviceCandidatos: CandidatosService, private serviceVoto: VotosService, private serviceTipoVotacao: TipoVotacaoService, private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {

    this.serviceTipoVotacao.getTipoVotacao().subscribe((tipoVotacaoServidor: TipoVotacao[]) =>{
      console.log(tipoVotacaoServidor);
      this.listaTipoVotacao = tipoVotacaoServidor;
      this.modificarComportamentoTagsRg(this.listaTipoVotacao[0].tipoVotacao);
    });

    this.obterInformacoesCandNaoIdentificado();

    this.serviceCandidatos.getAllCandidatos().subscribe((candidatoServidor: Candidato[]) => {
      console.log(candidatoServidor);
      this.listaDeCandidatos = candidatoServidor;
    });
  }

   public exibirCandidato(event: any){
    let numeroCand: string =  event.target.value;

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

    if (this.listaTipoVotacao[0].tipoVotacao == "naoanonimo" && this.rg == "") {
      alert("Preencha o campo do RG");
      return;
    }

    let ehVotoValido: boolean = false;
    let indexCandidato: number = -1;

    if (!this.ehVotoBranco) {
    for (let i = 0; i < this.listaDeCandidatos.length; i++) {
      if (this.numeroCandidato == this.listaDeCandidatos[i].numero) {
       indexCandidato = i;
       ehVotoValido = true;
       break;
      }

    }
    if(ehVotoValido) {
      this.nome = this.listaDeCandidatos[indexCandidato].nome
    }else{
      this.numeroCandidato = "N-U-L-O"
    }
  }else{
    this.numeroCandidato = "B-R-A-N-C-O"
  }

    const voto = {
      rg: this.rg,
      nome: this.nome,
      numeroCandidato: this.numeroCandidato
    }

    this.serviceVoto.adicionarVoto(voto).subscribe(
      (resultado) => {
        console.log(resultado);
        alert("Voto enviado com sucesso!");
      },
      (error) => {
        console.error(error);
        alert("Voto não enviado!");
      }
    );
    this.limparTela();
  }

  private modificarComportamentoTagsRg(tipoVotacao: string): void {
    switch (tipoVotacao) {
      case "anonimo":
        this.render.addClass(this.tagsRg.nativeElement, "visually-hidden");
        this.render.addClass(this.inputRg.nativeElement, "disabled");
        this.render.setAttribute(this.inputRg.nativeElement, "required", "false");
        break;
      case "naoanonimo":
        this.render.removeClass(this.tagsRg.nativeElement, "visually-hidden");
        this.render.removeClass(this.inputRg.nativeElement, "disabled");
        this.render.setAttribute(this.inputRg.nativeElement, "required", "true");
        break;
      default:
        this.render.addClass(this.tagsRg.nativeElement, "visually-hidden");
        this.render.addClass(this.inputRg.nativeElement, "disabled");
        this.render.setAttribute(this.inputRg.nativeElement, "required", "false");
        break;
    }
  }

private obterInformacoesCandNaoIdentificado(): void {
  this.imgCandidatoAtual = "http://localhost:3001/img/votoIndefinido/candidato-nao-identificado.jpg";
  this.nomeCandidatoAtual = "Candidato(a) não identificado(a)";
  this.numeroCandidatoAtual = "----";
}

public corrige() {
  this.obterInformacoesCandNaoIdentificado();
}

public branco(){
  this.ehVotoBranco = true;
  this.votar();
}

private limparTela(){
  this.rg = "";
  this.numeroCandidato = "";
  this.obterInformacoesCandNaoIdentificado();

}

}
