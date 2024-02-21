const {getAllvideoGamesController, getVideoGamesDetailsByIdController,createNewVideoGame,getVideoGamesByNameController} = require ("../controller/videogameController")


const getAllVideoGame = async (req,res)=>{
    try {
        const response = await getAllvideoGamesController();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})      
    }
};


const getAllVideoGamesById = async (req, res) => {
    try {
        const { id } = req.params;
        const gameDetails = await getVideoGamesDetailsByIdController(id);
        res.status(200).json(gameDetails);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllVideoGamesByName = async (req,res)=>{
    try {
        const {name} = req.query;
        const response = await getVideoGamesByNameController(name)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const postVideoGames = async (req,res)=>{
    try {
        const {name,description,image,Release,rating} = req.body
        const response = await createNewVideoGame(name,description,image,Release,rating)
        res.status(201).json(response)
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }


module.exports = {
    getAllVideoGame,
    getAllVideoGamesById,
    getAllVideoGamesByName,
    postVideoGames
}