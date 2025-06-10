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

  clientesComAtraso: number[] = [];
  contratosComParcelaAtrasada: number[] = [];

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
      this.clientesComAtraso = this.getClientesComAtraso();
      this.contratosComParcelaAtrasada = this.getContratosComParcelaAtrasada();
    });

  }

  onClienteSelecionado(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  onContratoSelecionado(contrato: Contrato): void {
    this.contratoSelecionado = contrato;
  }

  getContratosComParcelaAtrasada(): number[] {
    const contratrosComParcelaAtrasada: number[] = this.todosOsPagamentos
    .filter(pagamento => pagamento.status === 'ATRASADO')
      .map(pagamento => pagamento.contrato_id);

    const uniqueContratos = new Set(contratrosComParcelaAtrasada);
    return uniqueContratos ? Array.from(uniqueContratos) : [];
  }

  getClientesComAtraso(): number[] {
    const idContratosAtrasados = this.getContratosComParcelaAtrasada();
    const contratosAtrasados = this.todosOsContratos.filter(contrato => idContratosAtrasados.includes(contrato.contrato_id));
    const clientesComAtraso = contratosAtrasados.map(contrato => contrato.cliente_id);
    const uniqueClientes = new Set(clientesComAtraso);
    return uniqueClientes ? Array.from(uniqueClientes) : [];
  }


}
