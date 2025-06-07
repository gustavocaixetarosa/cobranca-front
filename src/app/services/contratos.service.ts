import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrato } from '../models/contract.interface';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  apiUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  getContratos() {
    return this.httpClient.get<Contrato[]>(`${this.apiUrl}/contratos`);
  }
}
