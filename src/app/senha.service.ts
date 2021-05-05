import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SenhaRequest } from './model/senha-request.model';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  urlBase = 'http://localhost:8080/v1';

  constructor(private httpClient:HttpClient) { }

  public gerarSenha(senha:SenhaRequest): Promise<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')    
    .set('Access-Control-Allow-Origin', '*');
    
    return this.httpClient.post(`${this.urlBase}/gera-senha`,
    senha, { headers: headers, responseType: 'text', reportProgress: true })
      .toPromise()
      .then((resposta: any) => resposta)
      .finally(() => {
        console.log('senha emitida');
      });
  }

  public chamarSenha(): Promise<any>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':  '*',
        Authorization: 'my-auth-token'
      })
    };

    return this.httpClient.patch(`${this.urlBase}/chama-senha`, headers)
      .toPromise()
      .then((resposta: any) => resposta)
      .finally(() => {
        console.log('senha chamada');
      });
  }

  public ultimaSenha(): Promise<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')    
    .set('Access-Control-Allow-Origin', '*');
    
    return this.httpClient.get(`${this.urlBase}/ultima-senha`,
    { headers: headers, responseType: 'text', reportProgress: true })
      .toPromise()
      .then((resposta: any) => resposta)
      .finally(() => {
        console.log('ultima senha');
      });
  }

  public excluiSenhas(): Promise<any>{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':  '*',
        Authorization: 'my-auth-token'
      })
    };
    
    return this.httpClient.delete(`${this.urlBase}/exclui-senhas`, headers)
      .toPromise()
      .then((resposta: any) => resposta)
      .finally(() => {
        console.log('exclui senhas');
      });
  }

}
