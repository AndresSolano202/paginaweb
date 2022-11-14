import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteUnoComponent } from 'src/modulo1/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from 'src/modulo2/componente-dos/componente-dos.component';
import { Componente1Component } from './componente1/componente1.component';


const routes: Routes = 
[
  {
    path: '', component: ComponenteUnoComponent
  },

  {
    path: 'web2', component: ComponenteDosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
