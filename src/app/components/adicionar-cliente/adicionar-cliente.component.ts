import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'adicionar-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      this.ClientesService.adicionarCliente(this.clienteForm.value).subscribe({
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
