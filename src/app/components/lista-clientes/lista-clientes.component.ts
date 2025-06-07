import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Cliente } from '../../models/cliente.interface';
import { MOCK_CLIENTES } from '../../../data/mock';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'lista-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FilterPipe,
    FormsModule
  ],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  clientes = MOCK_CLIENTES;

  selectedClient: Cliente | null = null;
  search: string = '';
  @Output() openClientContracts = new EventEmitter<any>();


  constructor(private readonly clientService: ClientesService) {
    this.clientService.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }


  onSelectClient(client: Cliente) {
    this.selectedClient = client;
    this.openClientContracts.emit(client);
  }
}
