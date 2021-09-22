import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrnaEletronicaComponent } from './urnaEletronica/urnaEletronica.component';
import { LoginComponent } from './login/login.component';
import { ApuracaoComponent } from './apuracao/apuracao.component';

@NgModule({
  declarations: [
    AppComponent,
      UrnaEletronicaComponent,
      LoginComponent,
      ApuracaoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
