const { Router } = require('express');
const genreRoute = require("./genreRoute")
const videogameRoute = require("./videoGameRoute")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

mainRouter.use("/videogame",videogameRoute)
mainRouter.use("/genre",genreRoute)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
