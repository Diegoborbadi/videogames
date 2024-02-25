const { Genre } = require("../db");
const { infoCleanerGenre } = require("../utils");
const axios = require("axios");

const getAllGenderController = async () => {
    try {
        const genreDetailDB = await Genre.findAll();
        const response = await axios.get("https://api.rawg.io/api/genres?key=32358ac92bd340c782b6c13d437a250f");
        const genresFromAPI = response.data;
        const cleanedGenres = infoCleanerGenre(genresFromAPI);
        return [...genreDetailDB, ...cleanedGenres];
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllGenderController };
