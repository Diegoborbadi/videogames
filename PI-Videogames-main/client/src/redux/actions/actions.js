export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_FILTERS_ORDER_VIDEOGAMES = "GET_FILTERS_ORDER_VIDEOGAMES"
export const GET_FILTERS_ORDER_VIDEOGAMESZA = "GET_FILTERS_ORDER_VIDEOGAMESZA"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";

export const PAGINATE = "PAGINATE"


import axios from "axios";

export function getVideoGames() {
    return async function(dispatch) {
        const response = await axios("http://localhost:3001/videogame");
        return dispatch({
            type: "GET_VIDEOGAMES", 
            payload: response.data
        });
    };
}



export function getVideoGamesDetail(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogame/${id}`)
    return dispatch({
        type:"GET_VIDEOGAME_DETAIL",
        payload:response.data
    })
    }
}


export function page(order){
    return function(dispatch){
    dispatch({
        type:"PAGINATE",
        payload:order 
    })
    }
}



export function postVideoGame(state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/videogame",state)
            alert("Videogame creado con exito.")
        } catch (error) {
            alert("Hubo un error al crear Videogame.")
        }
    }
}



export const filterByGenre = (genre) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/genre`)
    return dispatch({
        type:"FILTER_BY_GENRE",
        payload:response.data
    })
    }
};









export const orderAlfabeticamente = (order) => {
    return { type: GET_FILTERS_ORDER_VIDEOGAMES, payload: order };
  };
  export const orderAlfabeticamenteZA = (order) => {
    return { type: GET_FILTERS_ORDER_VIDEOGAMESZA, payload: order };
  };