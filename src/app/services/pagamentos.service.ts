import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagamento } from '../models/pagamento.interface';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  apiUrl = 'http://localhost:8080';

  constructor(private readonly httpCliente: HttpClient) { }

  getPagamentos() {
    return this.httpCliente.get<Pagamento[]>(`${this.apiUrl}/pagamentos`);
  }
}
