import { Routes } from '@angular/router';
import { AdicionarClienteComponent } from './components/adicionar-cliente/adicionar-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { AdicionarContratoComponent } from './components/adicionar-contrato/adicionar-contrato.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes/novo',
    component: AdicionarClienteComponent
  },
  {
    path: 'contratos/novo',
    component: AdicionarContratoComponent
  }
];
