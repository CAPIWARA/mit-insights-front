# MIT Insights - Front-End

Aplicação Front-End para o Hackathon MIT Insights realizado pela ABRAMIT.

## Instalação

### Requisitos

- Node.js 8.5 ou superior;
- NPM 3 ou superior;

> Ao instalar o Node.js, o NPM é instalado também.

### Passos pra Instalação do App

Instale as dependências do projeto usando NPM.

```sh
npm i
```

- Local / Desenvolvimento:

  - Utilize o script `start`;

  ```sh
  npm run start
  ```

  - Acesse a URL [http://localhost:8080/](http://localhost:8080/).


- Produção:

  - Utilize o script `build`;

  ```sh
  npm run build
  ```

  - Publique os arquivos da pasta ./dist no servidor;

  - É necessário adicionar uma configuração de _fallback_ que redirecione os
  acessos 404 para o `./index.html`.
