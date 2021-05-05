import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenhaEmiteComponent } from './senha-emite/senha-emite.component'
import { SenhaGestaoComponent } from './senha-gestao/senha-gestao.component'

const routes: Routes = [
  { path: 'senha-emite', component: SenhaEmiteComponent },
  { path: 'senha-gestao', component: SenhaGestaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
