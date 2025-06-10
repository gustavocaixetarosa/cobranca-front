import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { CommonModule } from '@angular/common';
import { Contrato } from '../../models/contract.interface';
import { ContratosService } from '../../services/contratos.service';
import { BotaoComponent } from '../../ui/botao/botao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-contratos',
  standalone: true,
  imports: [CommonModule, BotaoComponent],
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css'
})
export class ListaContratosComponent implements OnChanges{

  @Input() cliente: Cliente | null = null;
  contratosCliente: Contrato[] = [];
  @Input() todosContratos: Contrato[] = [];
  contratoSelecionado: Contrato | null = null;

  @Output() novoContratoSelecionado = new EventEmitter<Contrato>; // Substitua 'any' pelo tipo de evento que você deseja emitir

  constructor(private router: Router){}

  ngOnChanges(changes: SimpleChanges): void {
      this.contratosCliente = this.todosContratos.filter(contrato => contrato.cliente_id === this.cliente?.cliente_id);
  }

  onSelectContract(contract: Contrato) {
    this.contratoSelecionado = contract;
    this.novoContratoSelecionado.emit(contract);
  }

  criarContrato(){
    if (this.cliente) {
      this.router.navigate(['/contratos/novo'], { queryParams: { cliente_id: this.cliente.cliente_id } });
    }
  }
}
