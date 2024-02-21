const {Router} = require("express");
const {getAllVideoGamesById,postVideoGames,getAllVideoGame,getAllVideoGamesByName} = require ("../handler/videogameHandler")
const gameRoute= Router()

gameRoute.get("/",getAllVideoGame)
gameRoute.get("/name",getAllVideoGamesByName)
gameRoute.get("/:id",getAllVideoGamesById)
gameRoute.post("/",postVideoGames)

module.exports = gameRoute