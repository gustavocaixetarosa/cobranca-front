import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  apiUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  getClientes() {
    return this.httpClient.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  adicionarCliente(cliente: any) {
    return this.httpClient.post<any>(`${this.apiUrl}/clientes`, cliente);
  }
}
