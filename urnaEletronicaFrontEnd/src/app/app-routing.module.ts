import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrnaEletronicaComponent } from './urnaEletronica/urnaEletronica.component';

const routes: Routes = [
  {path:"",redirectTo:"urnaEletronica",pathMatch:"full"},
  {path:"urnaEletronica",component:UrnaEletronicaComponent },
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
