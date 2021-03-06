import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SalleComponent } from './salle/salle.component';
import {AppRoutingModule} from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    SalleComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
