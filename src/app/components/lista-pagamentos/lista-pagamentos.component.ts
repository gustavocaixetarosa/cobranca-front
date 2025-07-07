import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pagamento } from '../../models/pagamento.interface';
import { CommonModule } from '@angular/common';
import { Contrato } from '../../models/contract.interface';
import { FormsModule } from '@angular/forms';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'lista-pagamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-pagamentos.component.html',
  styleUrl: './lista-pagamentos.component.css'
})
export class ListaPagamentosComponent implements OnChanges {
  @Input() todosPagamentos: Pagamento[] = [];
  @Input() contratoSelecionado: Contrato | null = null;

  pagamentoSelecionado: Pagamento | null = null;
  pagamentosDoContrato: Pagamento[] = [];

  @Output() atualizarDados = new EventEmitter<void>();
  @Output() fechar = new EventEmitter<void>();

  constructor(
    private readonly elementRef: ElementRef,
    private readonly pagamentoService: PagamentosService
  ){}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.contratoSelecionado && !this.elementRef.nativeElement.contains(event.target)) {
      this.fechar.emit();
    }
  }

  selecionarPagamento(pagamento: Pagamento): void {
    this.pagamentoSelecionado = pagamento;
  }

  atualizarDataPagamento(pagamento: Pagamento): void {
    this.pagamentoService.atualizarPagamento(pagamento).subscribe(
      updatedPagamento => {
        console.log('Pagamento atualizado:', updatedPagamento);
        this.atualizarDados.emit();
      },
        error => {
        console.error('Erro ao atualizar pagamento:', error);
      }
    );
  }

  atualizarDataVencimento(pagamento: Pagamento): void {
    console.log('Atualizando data de vencimento para:', pagamento);
    this.pagamentoService.atualizarPagamento(pagamento).subscribe(
      updatedPagamento => {
        console.log('Data de vencimento atualizada:', updatedPagamento);
        this.atualizarDados.emit();
      }
      , error => {
        console.error('Erro ao atualizar data de vencimento:', error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.contratoSelecionado) {
      this.pagamentosDoContrato = this.todosPagamentos
      .filter(pagamento => pagamento.contrato_id === this.contratoSelecionado?.contrato_id)
      .sort((a, b) => a.pagamento_id - b.pagamento_id);
    } else {
      this.pagamentosDoContrato = [];
    }
  }
}
