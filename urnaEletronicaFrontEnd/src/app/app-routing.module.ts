import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrnaEletronicaComponent } from './urnaEletronica/urnaEletronica.component';

const routes: Routes = [
  {path:"",redirectTo:"urnaEletronica",pathMatch:"full"},
  {path:"urnaEletronica",component:UrnaEletronicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
