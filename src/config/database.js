/*
Esse código está repetido do app.js aqui pq qnd rodamos o sequelize-cli, para rodarmos migrations p.ex, ele não tem acesso ao nosso app.js, então ele vai acessar diretamente o config/database.js e para fazer com que esse arquivo enxergue nossas variáveis de ambiente é preciso repetir esse código aqui dentro 
 */
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
