import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Cliente } from '../../models/cliente.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lista-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FilterPipe,
    FormsModule,
    RouterLink
  ],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  @Input() todosClientes: Cliente[] = [];

  selectedClient: Cliente | null = null;
  search: string = '';
  @Output() openClientContracts = new EventEmitter<any>();

  onSelectClient(client: Cliente) {
    this.selectedClient = client;
    this.openClientContracts.emit(client);
  }

}
