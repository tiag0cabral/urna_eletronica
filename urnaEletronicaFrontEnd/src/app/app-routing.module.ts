import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApuracaoComponent } from './apuracao/apuracao.component';
import { LoginComponent } from './login/login.component';
import { UrnaEletronicaComponent } from './urnaEletronica/urnaEletronica.component';

const routes: Routes = [
  {path:"",redirectTo:"urnaEletronica",pathMatch:"full"},
  {path:"urnaEletronica",component:UrnaEletronicaComponent },
  {path:"login",component:LoginComponent},
  {path:"apuracao", component:ApuracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
