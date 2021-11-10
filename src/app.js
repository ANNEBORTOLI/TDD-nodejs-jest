require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");

class AppController {
  constructor() {
    this.express = express(); //this.express é onde está o nosso app.

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

//retorna só a propriedade express dessa classe.
module.exports = new AppController().express;

/*
OBS: vamos separar a parte de criação do servidor da lógica de alocação da porta. Isso pq quando formos rodar os testes, queremos que eles sejam rodados direto dentro da nossa aplicação e não aloque porte nenhuma.Sem precisar colocar nossa aplicação online. Vamos alocar a porta dentro do server.js.
*/
