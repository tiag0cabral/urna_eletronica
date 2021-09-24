import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email: string = '';
  public senha: string = '';

  constructor(private serviceLogin: LoginService, private router: Router) {}

  public login() {
    if (this.email == ''){
      alert('Preencha o campo e-mail!');
      return;

    }
    if (this.senha == ''){
      alert('Preencha o campo senha!');
      return;
    }


    const informacoesDeAcesso = {
      email: this.email,
      password: this.senha,
    };

    this.serviceLogin.enviarLogin(informacoesDeAcesso).subscribe(
      (aut) => {
        localStorage.setItem('token', aut.token);
        if ((aut.auth == true)) {
          this.router.navigateByUrl('apuracao');
        }else{
          alert('E-mail ou senha inválidos!');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
