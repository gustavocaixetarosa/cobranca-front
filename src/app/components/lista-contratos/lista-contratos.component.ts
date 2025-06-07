import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { CommonModule } from '@angular/common';
import { Contrato } from '../../models/contract.interface';
import { MOCK_CONTRATOS } from '../../../data/mock';

@Component({
  selector: 'lista-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css'
})
export class ListaContratosComponent implements OnChanges{

  @Input() cliente: Cliente | null = null;
  contratosCliente: Contrato[] = [];
  todosContratos = MOCK_CONTRATOS;
  contratoSelecionado: Contrato | null = null;

  @Output() novoContratoSelecionado = new EventEmitter<Contrato>; // Substitua 'any' pelo tipo de evento que você deseja emitir

  ngOnChanges(changes: SimpleChanges): void {
      this.contratosCliente = this.todosContratos.filter(contrato => contrato.client_id === this.cliente?.cliente_id);
  }

  onSelectContract(contract: Contrato) {
    this.contratoSelecionado = contract;
    this.novoContratoSelecionado.emit(contract);
  }

}
