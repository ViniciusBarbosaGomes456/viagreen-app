# ViaGreen

Aplicativo mobile para monitoramento da vegetação ao redor de rodovias. Quando o crescimento de um trecho atinge um nível crítico, o sistema aciona o alerta para que uma equipe de poda seja enviada ao local.

Projeto desenvolvido para a disciplina de [nome da disciplina] — versão em desenvolvimento (Sprint 3 concluída).

## Tecnologias

- React Native + Expo (SDK 57)
- React Navigation (Stack + Bottom Tabs)
- `react-native-calendars` (calendário interativo)
- WebView + Leaflet/OpenStreetMap (mapa, sem custo de API)
- Dados mockados (`/data/mockData.js`), simulando uma futura API

## Como rodar o projeto

```bash
npm install
npx expo start
```

Escaneie o QR Code exibido no terminal com o app **Expo Go** (Android/iOS) para abrir o aplicativo no seu celular.

## Status atual das funcionalidades

| Funcionalidade | Status | Observações |
|---|---|---|
| Login | 🟡 Implementado (mock) | Tela funcional, mas aceita qualquer credencial — não há autenticação real ainda |
| Registro de usuário | 🟡 Implementado (mock) | Formulário funcional, dados não são persistidos |
| Notificações | 🟢 Implementado | Feed de mensagens/comunicados mockado, com destaque automático ao ser acessado a partir de um pino do Mapa |
| Dashboard | 🟢 Implementado | Barras de progresso de crescimento por setor simulam evolução ao longo do tempo; calendário permite marcar/desmarcar datas de agendamento |
| Mapa | 🟢 Implementado | Pinos mockados representando trechos monitorados, com navegação direta para a notificação vinculada a cada ponto |
| Configurações | 🟡 Implementado | Alteração de modo de notificação e volume funcionam na interface; troca de senha e dados da conta ainda não persistem |

🟢 Completo para esta fase · 🟡 Funcional, com pendência de dados reais/persistência

Relatório completo de testes manuais: [`docs/ViaGreen_Testes_Manuais.pdf`](./docs/ViaGreen_Testes_Manuais.pdf)

## Pendências identificadas

- Implantação de dados reais, substituindo os dados mockados por uma fonte real (API/banco de dados)
- Mais elaboração e manipulação de dados (histórico de crescimento, cálculos e regras de negócio reais)
- Configurações mais detalhadas, com persistência das alterações (senha, preferências de notificação)
- Sistema de login funcional, com autenticação e validação reais
- Mapa mais intuitivo, com melhorias de usabilidade (hoje os pinos são estáticos e a navegação é básica)

## Plano de ajustes — Sprint 4

| Prioridade | Item | Descrição |
|---|---|---|
| Alta | Autenticação real | Implementar login/registro funcionais, com validação de credenciais e persistência de sessão |
| Alta | Dados reais | Definir fonte de dados (API ou banco) e substituir `mockData.js` nas telas de Dashboard e Mapa |
| Média | Configurações persistentes | Salvar alteração de senha, modo de notificação e volume de fato, não apenas em estado local |
| Média | UX do Mapa | Melhorar usabilidade: agrupamento de pinos próximos, busca por trecho/km, zoom mais inteligente |
| Baixa | Manipulação de dados | Adicionar filtros e histórico de crescimento por setor no Dashboard |

## Estrutura do projeto

```
viagreen-app/
├── App.js
├── screens/
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── NotificationScreen.js
│   ├── DashboardScreen.js
│   ├── MapScreen.js
│   └── SettingsScreen.js
├── navigation/
│   └── MainTabs.js
├── data/
│   └── mockData.js
└── docs/
    └── ViaGreen_Testes_Manuais.pdf
```
