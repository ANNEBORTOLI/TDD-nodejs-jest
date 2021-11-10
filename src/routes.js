const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

//Qnd usamos o '.use' nenhuma rota anterior usará esse middleware. No caso, nenhuma rota post. Se aplicando apenas a rota dashboard que vem depois.
routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
