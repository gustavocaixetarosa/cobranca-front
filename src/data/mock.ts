import { Cliente } from "../app/models/cliente.interface";
import { Contrato } from "../app/models/contract.interface";
import { Pagamento } from "../app/models/pagamento.interface";

export const MOCK_CLIENTES: Cliente[] = [
  {
    cliente_id: 1,
    nome: 'Maria da Silva',
    endereco: 'Rua das Flores, 123 - Centro, Belo Horizonte, MG',
    telefone: '(31) 99999-1234',
    email: 'maria.silva@email.com',
    data_vencimento: '2025-07-05',
    banco: 'Banco do Brasil'
  },
  {
    cliente_id: 2,
    nome: 'João Pereira',
    endereco: 'Av. Brasil, 456 - São Paulo, SP',
    telefone: '(11) 98888-5678',
    email: 'joao.pereira@email.com',
    data_vencimento: '2025-07-10',
    banco: 'Caixa Econômica Federal'
  }
];

export const MOCK_CONTRATOS: Contrato[] = [
  {
    contrato_id: 100,
    client_id: 1,
    duracao_em_meses: 12,
    cpf_contratante: '123.456.789-00',
    nome_contratante: 'Maria da Silva',
    data: '2025-01-10',
    valor_contrato: 12000
  },
  {
    contrato_id: 101,
    client_id: 2,
    duracao_em_meses: 6,
    cpf_contratante: '987.654.321-00',
    nome_contratante: 'João Pereira',
    data: '2025-03-15',
    valor_contrato: 6000
  }
];

export const MOCK_PAGAMENTOS: Pagamento[] = [
  {
    pagamento_id: 1,
    contrato_id: 100,
    valor: 1000,
    data_pagamento: '2025-02-05',
    data_vencimento: '2025-02-01',
    status: 'PAGO_COM_ATRASO'
  },
  {
    pagamento_id: 2,
    contrato_id: 100,
    valor: 1000,
    data_pagamento: '',
    data_vencimento: '2025-03-01',
    status: 'ABERTO'
  },
  {
    pagamento_id: 3,
    contrato_id: 101,
    valor: 1000,
    data_pagamento: '2025-04-10',
    data_vencimento: '2025-04-10',
    status: 'PAGO'
  },
  {
    pagamento_id: 4,
    contrato_id: 101,
    valor: 1000,
    data_pagamento: '',
    data_vencimento: '2025-05-10',
    status: 'ATRASADO'
  }
];
