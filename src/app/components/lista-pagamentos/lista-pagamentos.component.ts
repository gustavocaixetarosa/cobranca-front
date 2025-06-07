import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MOCK_PAGAMENTOS } from '../../../data/mock';
import { Pagamento } from '../../models/pagamento.interface';
import { CommonModule } from '@angular/common';
import { Contrato } from '../../models/contract.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lista-pagamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-pagamentos.component.html',
  styleUrl: './lista-pagamentos.component.css'
})
export class ListaPagamentosComponent implements OnChanges {
  todosPagamentos = MOCK_PAGAMENTOS;

  @Input() contratoSelecionado: Contrato | null = null;
  pagamentoSelecionado: Pagamento | null = null;
  pagamentosDoContrato: Pagamento[] = [];

  @Output() fechar = new EventEmitter<void>();

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.contratoSelecionado && !this.elementRef.nativeElement.contains(event.target)) {
      this.fechar.emit();
    }
  }

  selecionarPagamento(pagamento: Pagamento): void {
    this.pagamentoSelecionado = pagamento;
    console.log('Pagamento selecionado:', this.pagamentoSelecionado);
  }

  atualizarDataPagamento(pagamento: Pagamento): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.contratoSelecionado) {
      this.pagamentosDoContrato = this.todosPagamentos.filter(
        pagamento => pagamento.contrato_id === this.contratoSelecionado?.contrato_id
      );
    } else {
      this.pagamentosDoContrato = [];
    }
  }
}
