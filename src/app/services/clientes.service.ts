import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  getClientes() {
    return this.httpClient.get(`${this.apiUrl}/clientes`);
  }
}
