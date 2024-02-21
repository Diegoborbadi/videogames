const {getAllGenderController} = require ("../controller/genreController")


const getAllGenre = async (req,res)=>{
    try{
        const response = await getAllGenderController();
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error:error.message})
    }
};

module.exports = {getAllGenre}