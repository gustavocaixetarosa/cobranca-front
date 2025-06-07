import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { Cliente } from './models/cliente.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaClientesComponent, ListaContratosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  clienteSelecionado: Cliente | null = null;
  onClienteSelecionado(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    console.log('Cliente selecionado:', cliente);
  }
}
