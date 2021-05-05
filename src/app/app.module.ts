import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenhaEmiteComponent } from './senha-emite/senha-emite.component';
import { SenhaGestaoComponent } from './senha-gestao/senha-gestao.component';
import { SenhaService } from './senha.service';

@NgModule({
  declarations: [
    AppComponent,
    SenhaEmiteComponent,
    SenhaGestaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SenhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
