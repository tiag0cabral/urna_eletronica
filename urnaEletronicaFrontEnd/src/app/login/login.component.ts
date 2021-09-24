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
 const informacoesDeAcesso = {
      email: this.email,
      password: this.senha
    }

    this.serviceLogin.enviarLogin(informacoesDeAcesso).subscribe(
      aut => {
        localStorage.setItem("token", aut.token)
    },
    error => {
      console.error(error);
    })


  }

}
