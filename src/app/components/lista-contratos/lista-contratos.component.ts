import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { CommonModule } from '@angular/common';
import { Contrato } from '../../models/contract.interface';

@Component({
  selector: 'lista-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css'
})
export class ListaContratosComponent {

  @Input() cliente: Cliente | null = null;
  @Input() contracts: Contrato[] = [];
  @Input() selectedContract: Contrato | null = null;

  onSelectContract(contract: Contrato) {
    // Implemente a lógica de seleção conforme necessário
    // Exemplo: emitir evento para o componente pai
  }

}
