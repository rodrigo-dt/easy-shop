# Easy Shop

## 📌 Objetivo

O **Easy Shop** é uma aplicação web desenvolvida para facilitar e otimizar o processo de compras em supermercados. Seu propósito é oferecer aos usuários — especialmente famílias — uma maneira organizada de planejar, controlar e analisar suas compras, evitando desperdícios, compras duplicadas e descontrole financeiro.

## 👥 Público-alvo

Famílias que desejam organizar suas listas de compras, economizar tempo no supermercado e acompanhar os gastos por período e por local de compra.

## 🧩 Funcionalidades Principais

- Cadastro de múltiplos usuários com autenticação por e-mail/senha e opção de login via Google.
- Criação de listas de compras padrão, com possibilidade de edição para cada compra específica.
- Organização dos produtos em seções personalizáveis (ex.: hortifrúti, frios, higiene).
- Registro de compras realizadas, com separação por supermercado, data e valor gasto.
- Inserção de preços durante a compra, permitindo cálculo automático do total e controle em tempo real dos gastos.
- Alertas de extrapolação de orçamento, com definição de limite antes da compra.
- Histórico de compras com análises mensais e comparação de preços entre mercados.
- Relatórios e gráficos, como:
  - Evolução de gastos por mês.
  - Comparação de preços do mesmo produto entre mercados.
- Listas colaborativas com edição simultânea por múltiplos membros da família.

## 🛠️ Tecnologias Utilizadas

| Camada       | Tecnologia         |
|--------------|--------------------|
| Frontend     | Angular            |
| Backend      | Node.js + TypeScript |
| Banco de Dados | PostgreSQL       |
| Hospedagem   | Azure              |
| Contêineres  | Docker (multi-stage) |
| Autenticação | JWT + Login Google (opcional) |

## 🧱 Justificativas Técnicas

- **Angular**: robustez para construção de SPAs com responsividade e modularidade.
- **Node.js**: leve, rápido e com grande compatibilidade com o ecossistema web.
- **PostgreSQL**: banco relacional confiável, ideal para modelagem estruturada e relatórios SQL.
- **Azure**: hospedagem escalável, integração com CI/CD e suporte nativo a PostgreSQL e containers.
- **Docker**: padronização do ambiente de desenvolvimento e produção.

## 🚀 Escopo Inicial (MVP)

- Cadastro e autenticação de usuários.
- Tela de criação e edição de listas de compras padrão.
- Registro de compra com preço total.
- Visualização do histórico de compras.
- Relatório simples de gastos por supermercado e por mês.
- Suporte mobile.

## 🌱 Possibilidades Futuras

- Integração com APIs de supermercados reais.
- Modo offline (PWA).
- Recomendação de produtos recorrentes.
- Estatísticas de consumo.
- Exportação para PDF ou Excel.
- Gamificação (metas, badges, comparações mensais).
