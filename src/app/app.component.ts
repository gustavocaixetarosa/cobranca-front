import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { Cliente } from './models/cliente.interface';
import { Contrato } from './models/contract.interface';
import { ListaPagamentosComponent } from './components/lista-pagamentos/lista-pagamentos.component';
import { CommonModule } from '@angular/common';
import { ClientesService } from './services/clientes.service';
import { Pagamento } from './models/pagamento.interface';
import { ContratosService } from './services/contratos.service';
import { PagamentosService } from './services/pagamentos.service';


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

  todosOsClientes: Cliente[] = [];
  todosOsContratos: Contrato[] = [];
  todosOsPagamentos: Pagamento[] = [];

  clienteSelecionado: Cliente | null = null;
  contratoSelecionado: Contrato | null = null;

  constructor(
    private readonly clientesService: ClientesService,
    private readonly contratosService: ContratosService,
    private readonly pagamentosService: PagamentosService
  ) {
    this.atualizarDados();
  }

  atualizarDados(){
    this.clientesService.getClientes().subscribe((clientes: Cliente[]) => {
      this.todosOsClientes = clientes;
    });
    this.contratosService.getContratos().subscribe((contratos: Contrato[]) => {
      this.todosOsContratos = contratos;
      console.log(this.todosOsContratos)
    });
    this.pagamentosService.getPagamentos().subscribe((pagamentos: Pagamento[]) => {
      this.todosOsPagamentos = pagamentos;
    });
  }
  onClienteSelecionado(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  onContratoSelecionado(contrato: Contrato): void {
    this.contratoSelecionado = contrato;
    // console.log('Contrato selecionado:', contrato);
  }
}
