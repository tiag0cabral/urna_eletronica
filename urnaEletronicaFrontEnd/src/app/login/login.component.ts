import { Component } from '@angular/core';
import { LoginService } from '../service/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public email: string = "";
  public senha: string = "";

  constructor(private serviceLogin: LoginService) {

  }

  public login(){
    console.log("Logou");

    const informacoesDeAcesso = {
      email: this.email,
      password: this.senha
    }

    this.serviceLogin.enviarLogin(informacoesDeAcesso).subscribe(
      resultado => {
        console.log(resultado);
    },
    error => {
      console.error(error);
    })

  }

}
