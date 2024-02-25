const infoCleaner = (data) => {
    if (Array.isArray(data)) {
        return data.map((game) => {
            return {
                id: game.id,
                name: game.name,
                image: game.background_image,
                genres: game.genres.map(genre => genre.name) 
            };
        });
    } else {
        throw new Error("La estructura de datos de la API no es la esperada");
    }
};

const infoCleanerGenre = (data) => {
    if (data && data.results) {
        const cleanedData = data.results.map(genre => ({
            id: genre.id,
            name: genre.name,
            games: genre.games.map(game => game.name)
        }));   
        return cleanedData;
    } else {
        return [];
    }
};







const infoCleanerDetail = (data) => {
    if (data && typeof data === 'object') {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            platform: data.parent_platforms.map(platform => platform.platform.name),
            released: data.released,
            rating: data.rating,
            image: data.background_image,
            genres: data.genres.map(genre => genre.name)       
     };
    } else {
        throw new Error("La estructura de datos de los detalles del juego no es la esperada");
    }
};





module.exports = { infoCleaner,infoCleanerDetail,infoCleanerGenre };
