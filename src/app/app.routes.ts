import { Routes } from '@angular/router';
import { AdicionarClienteComponent } from './components/adicionar-cliente/adicionar-cliente.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes/adicionar',
    component: AdicionarClienteComponent
  }
];
