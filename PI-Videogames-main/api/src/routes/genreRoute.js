const {Router} = require("express");
const {getAllGenre} = require ("../handler/genreHandler")
const gameRoute= Router()

gameRoute.get("/",getAllGenre)

module.exports = gameRoute