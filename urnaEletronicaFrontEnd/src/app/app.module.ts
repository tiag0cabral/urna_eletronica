import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrnaEletronicaComponent } from './urnaEletronica/urnaEletronica.component';

@NgModule({
  declarations: [	
    AppComponent,
      UrnaEletronicaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
