import { Component, Inject, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";

import { SenhaService } from "../senha.service";
import { Senha } from "../model/senha.model";
import { SenhaRequest } from "../model/senha-request.model";

@Component({
  selector: 'app-senha-emite',
  templateUrl: './senha-emite.component.html',
  styleUrls: ['./senha-emite.component.scss'],
  providers: [SenhaService]
})
export class SenhaEmiteComponent implements OnInit {

  public showLabel: boolean = false;
  public senha!: Senha;
  public ultimaSenha!: Senha;
  public senhaRequest!: SenhaRequest;
  constructor( private route: Router, 
               private senhaService: SenhaService,
               @Inject(DOCUMENT) private document: Document) { 
    this.senhaRequest = new SenhaRequest();
    this.ultimaSenha = new Senha();        
               }
               
  ngOnInit(): void {

    this.senhaService.ultimaSenha()
    .then((response) => {      
      console.log(response);
      this.ultimaSenha = JSON.parse(response);
      console.log(this.ultimaSenha.tpoFila+this.ultimaSenha.numero);
      this.showLabel = true;
    });
    setTimeout(function() {  document.location.reload(); },4000); 

  }

  gerarSenha(tpoFila: string){
    this.senhaRequest.tpoFila = tpoFila;    
    this.senhaService.gerarSenha(this.senhaRequest)
    .then((response) => {      
      this.senha = JSON.parse(response);
      console.log(this.senha.tpoFila+this.senha.numero);
      this.showLabel = true;
    });
  }

}
