# Repositório do desafio técnico `Desenvolvimento de API de Agendamento` 📅

Repositório possuí projeto desenvolvido para o `Desafio de desenvolvimento de API de Agendamento`, para a empresa `WeDoRemotely`.

## Informações de escolha de desenvolvimento

- Como a lógica do desafio passava que só seria agendado passando apenas o e-mail, não ficou muito claro como viria a data do agendamento, já que em uma aplicação real a pessoa usuária iria escolher a data e hora. Então coloquei para ser criado a data na hora que inserir o e-mail, mas caso a pessoa usuária tivesse passado uma data eu verificaria no banco se está disponível para depois salvar o agendamento;
- Uma coisa que não foi pedida, mas que fiquei na dúvida de fazer, isso o cliente responderia, seria uma `auditoria`, e ao invés de deletar um agendamento, apenas desativaríamos ele, para mantar o histórico;
- Tem uma camada a mais do que foi usado como projeto, a camada `Service`. Ela é a camada de lógica de negócio da aplicação, sendo a `Model` camada de representação de dados e lógica de negócio relacionada e a `Controller` camada de coordenação das solicitações do cliente e chamadas aos serviços correspondentes.;
- A escolha de usar `try/catch` na camada Service é porque meus `middlewares` já estão validando todos os inputs, sendo a camada de Controller apenas a camada de request e response, sem nenhuma regra de negócio.

## Linguagens e ferramentas usadas

[![Git][Git-logo]][Git-url]
[![ESLint][ESLint-logo]][ESLint-url]
[![Docker][Docker-logo]][Docker-url]
[![.ENV][.ENV-logo]][.ENV-url]
[![TypeScript][TypeScript-logo]][TypeScript-url]
[![ts-node][ts-node-logo]][ts-node-url]
[![NodeJS][NodeJS-logo]][NodeJS-url]
[![Express][Express-logo]][Express-url]
[![Nodemon][Nodemon-logo]][Nodemon-url]
[![Sequelize][Sequelize-logo]][Sequelize-url]
[![MySQL][MySQL-logo]][MySQL-url]
[![Jest][Jest-logo]][Jest-url]

## O que foi desenvolvido
   
O objetivo deste desafio é desenvolver uma API RESTful em Node.js utilizando TypeScript para um sistema de agendamento de salões de beleza. A API permite que os clientes do salão agendem serviços de beleza fornecendo apenas um e-mail de contato.

## Instruções para instalar e rodar

<details>

1. Clone o repositório (recomendado usar em SSH) e entre na pasta:

    ```bash
    git clone git@github.com:ludson96/desafio-nodejs.git
    cd desafio-nodejs
    ```

1. Instale as dependências:

    ```bash
    npm install
    ```

1. Na raiz do projeto há um arquivo `.env.example`, que deve ser preenchido com as variáveis de ambiente para o funcionamento da API com o Banco de dados e a sua porta. Todas as instruções de preenchimento estão nesse arquivo.

1. Caso não tenha `MySQL` instalados, basta executar o `docker-compose.yml` (necessário docker instalado) com o comando abaixo:

   ```bash
   # Execute o comando na raiz do projeto. 
   # Flag -d irá executá-lo em segundo plano.
   docker compose up -d
   ```
1. Para iniciar o servidor após configurar o `MySQL` e definir as `variáveis`, utilize o `nodemon`. Este comando também irá realizar o build, remover quaisquer bancos de dados existentes, executar as migrações e inserir os dados iniciais. Para isso, execute o seguinte comando:

   ```bash
   npm run dev
   # Após a execução, pode testar as requisições a API.
   ```

1. Caso queira testar com um Rest API Client tem um arquivo `Insomnia.json`, exportado a partir do insomnia, que possui uma coleção com todas as requisições possíveis

</details>

## Uso

<details>

  <summary><strong>Schedule</strong></summary>

### Endpoints

### 1. `POST /schedule`

<details>
  <summary>Agenda um serviço de beleza, fornecendo apenas o e-mail de contato.</summary><br />

Funciona da seguinte forma:

- `/schedule` (`POST`)
   - deve receber via corpo do POST um e-mail. 
     - Exemplo de requisição:
        ```json
        {
          "email": "maria_456@hotmail.com"
        }
        ```
   - em caso de sucesso:
      - retorna o status HTTP 201 (CREATED)
      - retorna uma mensagem e os dados do agendamento criado. 
        - Exemplo de resposta:

        ```json
        {
          "message": {
            "message": "Service scheduled successfully"
          },
          "newSchedule": {
            "scheduleDateTime": "2024-04-05T21:01:22.116Z",
            "id": 4,
            "email": "maria_456@hotmail.com"
          }
        }
        ```
    - caso não seja informado nenhum `email`, a rota retorna o status HTTP 400 com a
     mensagem `Email is required` no corpo da resposta.
    - caso seja informado apenas espaços vazios, a rota retorna o status HTTP 400 com a
     mensagem `Email cannot be an empty string` no corpo da resposta.
    - caso seja informado um `email` invalido, a rota retorna o status HTTP 400 com a
     mensagem `Invalid email format` no corpo da resposta.

</details>


### 2. `GET /schedule`

<details>
  <summary>Lista todos os agendamentos.</summary><br />

Funciona da seguinte forma:

- `/schedule` (`GET`)
   - retorna um array de todos os agendamentos. 
     - Exemplo de resposta:

        ```json
        [
          {
            "id": 1,
            "email": "exemple_123@hotmail.com",
            "scheduleDateTime": "2024-04-20T10:30:00.000Z"
          },
          {
            "id": 2,
            "email": "pedro-789@gmail.com",
            "scheduleDateTime": "2024-04-30T09:00:00.000Z"
          },
          {
            "id": 3,
            "email": "maria_456@hotmail.com",
            "scheduleDateTime": "2024-04-05T21:01:22.000Z"
          }
        ]
        ```

</details>

### 3. `GET /schedule/{id}`

<details>
  <summary>Cancela um agendamento pelo ID.</summary><br />

Funciona da seguinte forma:

- `/schedule/{id}` (`GET`):
   - recebe um `id` pelo caminho da rota e retorna uma mensagem de sucesso. 
     - Exemplo de resposta para a rota `/schedule/3` (supondo que exista um agendamento com `id = 3`):

        ```json
        {
          "message": "Scheduling canceled successfully"
        }
        ```
   - caso não exista um agendamento com esse `id`, a rota retorna o status HTTP 404 com a
     mensagem `Schedule not found with ID: 3` no corpo da resposta.
    - caso seja informado um `id` que não é um número, a rota retorna o status HTTP 400 com a
     mensagem `ID must be a number` no corpo da resposta.

</details>

</details>

[Git-logo]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com

[NodeJS-logo]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
[TypeScript-logo]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Docker-logo]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com
[Jest-logo]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io
[MySQL-logo]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com
[Sequelize-logo]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org
[Express-logo]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com
[Nodemon-logo]: https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=for-the-badge
[Nodemon-url]: https://www.npmjs.com/package/nodemon
[ESLint-logo]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[ts-node-logo]: https://img.shields.io/badge/ts--node-3178C6?logo=tsnode&logoColor=fff&style=for-the-badge
[ts-node-url]: https://www.npmjs.com/package/ts-node-dev
[.ENV-logo]: https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=for-the-badge
[.ENV-url]: https://www.npmjs.com/package/dotenv