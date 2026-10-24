# ViaGreen

Aplicativo mobile para monitoramento da vegetação ao redor de rodovias. Quando o crescimento de um trecho atinge um nível crítico, o sistema aciona o alerta para que uma equipe de poda seja enviada ao local.

Projeto desenvolvido para a disciplina de [nome da disciplina] — **Versão Final Concluída e Implementada**.

## Tecnologias

* React Native + Expo (SDK 57)
* React Navigation (Stack + Bottom Tabs)
* `react-native-calendars` (calendário interativo)
* WebView + Leaflet/OpenStreetMap (mapa interativo)
* API RESTful integrada com banco de dados em produção

## Como rodar o projeto

```bash
npm install
npx expo start

```

Escaneie o QR Code exibido no terminal com o app **Expo Go** (Android/iOS) para abrir o aplicativo no seu celular.

## Status das funcionalidades

| Funcionalidade | Status | Observações |
| --- | --- | --- |
| Login | 🟢 Implementado | Autenticação real com validação de credenciais, segurança por token e sessão persistente |
| Registro de usuário | 🟢 Implementado | Formulário validado com persistência completa no banco de dados |
| Notificações | 🟢 Implementado | Feed de mensagens em tempo real, com destaque automático ao ser acessado a partir de um pino do Mapa |
| Dashboard | 🟢 Implementado | Monitoramento em tempo real do crescimento por setor, com histórico completo e agendamentos integrados via calendário |
| Mapa | 🟢 Implementado | Pinos dinâmicos de trechos monitorados, busca por trecho/km, agrupamento e navegação direta para notificações |
| Configurações | 🟢 Implementado | Alterações de perfil, senha, preferências de notificação e volume salvas com sucesso em banco de dados |

🟢 **Totalmente concluído e em produção**

Relatório completo de testes e homologação: [`docs/ViaGreen_Testes_Manuais.pdf`](https://www.google.com/search?q=./docs/ViaGreen_Testes_Manuais.pdf)

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
├── services/
│   └── api.js
└── docs/
    └── ViaGreen_Testes_Manuais.pdf

```
