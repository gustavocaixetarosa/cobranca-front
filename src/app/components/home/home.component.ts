import { Component } from "@angular/core";
import { ListaClientesComponent } from "../lista-clientes/lista-clientes.component";
import { ListaContratosComponent } from "../lista-contratos/lista-contratos.component";
import { ListaPagamentosComponent } from "../lista-pagamentos/lista-pagamentos.component";
import { CommonModule } from "@angular/common";
import { Cliente } from "../../models/cliente.interface";
import { Contrato } from "../../models/contract.interface";
import { Pagamento } from "../../models/pagamento.interface";
import { ClientesService } from "../../services/clientes.service";
import { ContratosService } from "../../services/contratos.service";
import { PagamentosService } from "../../services/pagamentos.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      ListaClientesComponent,
      ListaContratosComponent,
      ListaPagamentosComponent,
      CommonModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
  }
}
