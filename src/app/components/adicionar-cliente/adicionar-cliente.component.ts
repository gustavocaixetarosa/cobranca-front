import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'adicionar-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './adicionar-cliente.component.html',
  styleUrl: './adicionar-cliente.component.css'
})
export class AdicionarClienteComponent {
  clienteForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly ClientesService: ClientesService
  ) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: [''],
      telefone: ['', Validators.required],
      cpf_cliente: ['', Validators.required],
      data_vencimento: ['', Validators.required],
      banco: ['']
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      const clienteRequest = {
        "nome": this.clienteForm.value.nome,
        "endereco": this.clienteForm.value.endereco,
        "telefone": this.clienteForm.value.telefone,
        "registro": this.clienteForm.value.cpf_cliente,
        "dataContrato": this.clienteForm.value.data_vencimento,
        "banco": this.clienteForm.value.banco
      }
      this.ClientesService.adicionarCliente(clienteRequest).subscribe({
        next: (response) => {
          console.log('Cliente adicionado com sucesso:', response);
          this.clienteForm.reset();
        },
        error: (error) => {
          console.error('Erro ao adicionar cliente:', error);
        }
      });
      console.log(this.clienteForm.value);
    }
  }
}
