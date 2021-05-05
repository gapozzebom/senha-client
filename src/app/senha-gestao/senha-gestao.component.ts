import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SenhaService } from "../senha.service";
import { Senha } from "../model/senha.model";
import { SenhaRequest } from "../model/senha-request.model";

@Component({
  selector: 'app-senha-gestao',
  templateUrl: './senha-gestao.component.html',
  styleUrls: ['./senha-gestao.component.scss'],
  providers: [SenhaService]
})

export class SenhaGestaoComponent implements OnInit {

  public showLabel: boolean = false;
  public senha!: Senha;
  public senhaRequest!: SenhaRequest;
  constructor( private route: Router, 
               private senhaService: SenhaService) { 
    this.senhaRequest = new SenhaRequest();
               }

  ngOnInit(): void {
  }

  chamarSenha(){    
    this.senhaService.chamarSenha()
    .then((response) => {      
      this.senha = response;
      console.log(this.senha.tpoFila+this.senha.numero);
      this.showLabel = true;
    });
  }

  excluiSenhas(){
    this.senhaService.excluiSenhas()
    .then((response) => {                  
      this.showLabel = false;
    });
  }

}
