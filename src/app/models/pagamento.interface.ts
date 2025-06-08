export interface Pagamento {
  pagamento_id: number;
  contrato_id: number;
  valor: number;
  data_pagamento: string;
  data_vencimento: string;
  numer_parcela: number;
  status: 'ABERTO' | 'PAGO' | 'PAGO_COM_ATRASO' | 'ATRASADO';
  observacao?: string;
}
