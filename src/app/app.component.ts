import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { Cliente } from './models/cliente.interface';
import { Contrato } from './models/contract.interface';
import { ListaPagamentosComponent } from './components/lista-pagamentos/lista-pagamentos.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListaClientesComponent,
    ListaContratosComponent,
    ListaPagamentosComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  clienteSelecionado: Cliente | null = null;
  contratoSelecionado: Contrato | null = null;

  onClienteSelecionado(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    console.log('Cliente selecionado:', cliente);
  }

  onContratoSelecionado(contrato: Contrato): void {
    this.contratoSelecionado = contrato;
    console.log('Contrato selecionado:', contrato);
  }
}
