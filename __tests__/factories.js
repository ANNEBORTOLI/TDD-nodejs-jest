const faker = require("faker");
const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

// Primeiro parametro é o nome do factory que geralmente é o mesmo nome do Model
// segundo parametro é o model
// terceiro parametro os dados que vamos colocar no model
factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = factory;
