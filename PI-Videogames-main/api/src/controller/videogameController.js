const { Videogame } = require("../db");
const { infoCleaner, infoCleanerDetail } = require("../utils");
const axios = require("axios");


const getAllvideoGamesController = async () => {
    try {
      let allVideoGames = [];
      let nextPage = "https://api.rawg.io/api/games?key=32358ac92bd340c782b6c13d437a250f";
      let pageCount = 0;
      while (nextPage && pageCount < 5) {
        const response = await axios.get(nextPage);
       // console.log(response.data);    
        const { results, next } = response.data;
        const cleanedResults = infoCleaner(results);
        allVideoGames.push(...cleanedResults);  
        nextPage = next;
        pageCount++;
      }
      return allVideoGames;
    } catch (error) {
      console.error("Error al obtener datos de la API:", error.message);
      return [];
    }
  };
  
  

const getVideoGamesDetailsByIdController = async (id) => {
    try {
        const gameDetailsDB = await Videogame.findAll();
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=32358ac92bd340c782b6c13d437a250f`);
        const infoApi = response.data;
        const gameDetails = infoCleanerDetail(infoApi);
        if (!gameDetails) {
            throw new Error('Juego no encontrado');
        }
        return [...gameDetailsDB, gameDetails];
    } catch (error) {
        throw error;
    }
};


const getVideoGamesByNameController = async (name) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${name}?api_key=32358ac92bd340c782b6c13d437a250f`);
        const gamesApiClean = infoCleanerDetail(response.data);
        if (!Array.isArray(gamesApiClean)) {
            throw new Error("La función infoCleanerDetail no devolvió un array válido.");
        }
        const videoGamesFilter = gamesApiClean.filter((game) => game.name === name);
        const gameDb = await Videogame.findAll({ where: { name: name } });
        return [...videoGamesFilter, ...gameDb];
    } catch (error) {
        throw error;
    }
}


const createNewVideoGame = async(name,description,image,Release,rating)=>{
    const newVideoGame = await Videogame.create({name,description,image,Release,rating})
    return newVideoGame
}
module.exports = {
     getAllvideoGamesController,
     getVideoGamesDetailsByIdController,
     getVideoGamesByNameController,
     createNewVideoGame
     };
