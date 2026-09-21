export const notificacoesMock = [
  { id: '1', autor: 'João (equipe de poda)', mensagem: 'Poda do km 22 concluída.', hora: '09:14', tipo: 'normal' },
  { id: '2', autor: 'Sistema', mensagem: 'Vegetação no km 35 atingiu nível crítico.', hora: '10:02', tipo: 'critico' },
  { id: '3', autor: 'Ana (supervisão)', mensagem: 'Torre do km 41 fora do ar por manutenção.', hora: '11:30', tipo: 'critico' },
];

export const crescimentoSetores = [
  { id: '1', setor: 'Setor 2', percentual: 68 },
  { id: '2', setor: 'Setor 4', percentual: 19 },
];

export const alertasAgenda = [
  { id: '1', dia: 7, mes: '2026-05', tipo: 'Manutenção', setor: 'Setor 6' },
  { id: '2', dia: 18, mes: '2026-05', tipo: 'Instalação', setor: 'Setor 9' },
];

export const pontosMapa = [
  { id: '1', titulo: 'Km 62 - Sentido Oeste', status: 'atenção', latitude: -23.2701, longitude: -47.3532, notificacaoId: null },
  { id: '2', titulo: 'Km 75 - Sentido Leste', status: 'crítico', latitude: -23.2865, longitude: -47.4680, notificacaoId: '2' },
  { id: '3', titulo: 'Km 88 - Sentido Oeste', status: 'ok', latitude: -23.3020, longitude: -47.5910, notificacaoId: null },
  { id: '4', titulo: 'Torre - Km 90', status: 'crítico', latitude: -23.3095, longitude: -47.6120, notificacaoId: '3' },
];

export const usuarioMock = {
  nome: 'Carlos Silva',
  email: 'carlos.silva@viagreen.com',
  cargo: 'Técnico de Monitoramento',
};