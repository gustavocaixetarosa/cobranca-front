import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BotaoComponent } from '../../ui/botao/botao.component';
import { ContratosService } from '../../services/contratos.service';

@Component({
  selector: 'adicionar-contrato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    BotaoComponent
  ],
  templateUrl: './adicionar-contrato.component.html',
  styleUrl: './adicionar-contrato.component.css'
})
export class AdicionarContratoComponent {
  contratoForm: FormGroup;
  clienteId: number | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly contratoService:ContratosService
  ) {
    this.clienteId = Number(this.route.snapshot.queryParamMap.get('cliente_id'));
    this.contratoForm = this.fb.group({
      cliente_id: [this.clienteId, Validators.required],
      nome_contratante: ['', Validators.required],
      cpf_contratante: ['', Validators.required],
      dataInicioContrato: ['', Validators.required],
      dataPrimeiraParcela: ['', Validators.required],
      duracao_em_meses: ['', [Validators.required, Validators.min(1)]],
      valor_contrato: ['', [Validators.required, Validators.min(0.01)]]
    });
    this.contratoForm.get('cliente_id')?.disable();
  }

  onSubmit() {
    if (this.contratoForm.valid) {
      const novoContrato = {
        "clienteId": this.clienteId,
        "nomeContratante": this.contratoForm.value.nome_contratante,
        "cpfContratante": this.contratoForm.value.cpf_contratante,
        "dataInicioContrato": this.contratoForm.value.dataInicioContrato,
        "dataPrimeiraParcela": this.contratoForm.value.dataPrimeiraParcela,
        "duracaoEmMeses": this.contratoForm.value.duracao_em_meses,
        "valorContrato": this.contratoForm.value.valor_contrato
      }
      console.log('Novo contrato:', novoContrato);
      this.contratoService.adicionarContrato(novoContrato).subscribe({
        next: () => {
          console.log('Contrato adicionado com sucesso');
          this.contratoForm.reset();
        },
        error: (error) => {
          console.error('Erro ao adicionar contrato:', error);
        }
      });
    }
  }
}
