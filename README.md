# Desafio de Desenvolvimento de API de Agendamento

## Descrição do Projeto

O objetivo deste desafio é desenvolver uma API RESTful em Node.js utilizando TypeScript para um sistema de agendamento de salões de beleza. A API permitirá que os clientes do salão agendem serviços de beleza fornecendo apenas um e-mail de contato.

## Requisitos do Projeto

1. Implementar uma API RESTful em Node.js com TypeScript.
2. Utilizar um banco de dados relacional (por exemplo, MySQL, PostgreSQL, SQLite) para armazenar os dados dos agendamentos.
3. Criar endpoints para:
   - Listar todos os agendamentos.
   - Agendar um serviço de beleza, fornecendo apenas um e-mail de contato.
   - Cancelar um agendamento pelo ID.
4. Utilizar TypeScript para melhorar a robustez do código.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- Banco de Dados Relacional (MySQL, PostgreSQL, SQLite, etc.)

## Estrutura do Projeto

A estrutura do projeto deve seguir uma organização básica, como a seguinte:

    projeto-agendamento-salao/
    │
    ├── src/
    │   ├── controllers/
    │   │   └── [controller.ts]      # Controladores para lidar com as requisições HTTP
    │   ├── models/
    │   │   └── [model.ts]           # Modelos para definir a estrutura dos dados no banco
    │   ├── routes/
    │   │   └── [routes.ts]          # Definição das rotas da aplicação
    │   └── index.ts                 # Arquivo principal, inicializa o servidor Express
    │
    ├── config/
    │   └── [database.ts]            # Configuração do banco de dados
    │
    └── package.json                 # Arquivo de configuração do Node.js



## Critérios de Avaliação

Seu projeto será avaliado com base nos seguintes critérios:

1. Funcionalidade Completa da API de Agendamento
2. Organização do Código e Estrutura do Projeto
3. Boas Práticas de Desenvolvimento (nomenclatura de variáveis, modularização, etc.)
4. Utilização Efetiva de TypeScript para Tipagem Estática
5. Tratamento de Erros e Exceções
6. (Bônus) Documentação Clara e Concisa 
7. (Bônus) Uso de variaveis de ambiente

## Entrega

- Faça um fork deste repositório e desenvolva o projeto nele.
- Ao finalizar, envie um pull request com a sua solução.

