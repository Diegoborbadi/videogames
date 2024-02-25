import { GET_VIDEOGAMES, 
    GET_VIDEOGAME_DETAIL, 
    GET_FILTERS_ORDER_VIDEOGAMES,
    PAGINATE,
    GET_FILTERS_ORDER_VIDEOGAMESZA,
    FILTER_BY_GENRE } from "../actions/actions";

const initialState = {
    allVideoGames: [],
    allvideoGamesCopy: [], 
    allVideogameDetail: [],
    currentPage:0
};

const rootReducer = (state = initialState, action) => {
    const ITEMS_PER_PAGE = 15;
    switch (action.type) {
        case GET_VIDEOGAMES: 
            return {
                ...state,
                allVideoGames: [...action.payload].splice(0,ITEMS_PER_PAGE) ,
                allvideoGamesCopy: [...action.payload]
            };
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                allVideogameDetail: action.payload
            };
        case GET_FILTERS_ORDER_VIDEOGAMES:
            const copyVideoGamesList = [...state.allVideoGames];
            return {
                ...state,
                allVideoGames:
                    action.payload === "ascendente"
                        ? copyVideoGamesList.sort((a, b) => a.name.localeCompare(b.name))
                        : copyVideoGamesList.sort((a, b) => b.name.localeCompare(a.name))
            };
            case GET_FILTERS_ORDER_VIDEOGAMESZA:
                const copyVideoGamesListZA = [...state.allVideoGames];
                return {
                    ...state,
                    allVideoGames:
                        action.payload === "descendente"
                            ? copyVideoGamesListZA.sort((a, b) => b.name.localeCompare(a.name))
                            : copyVideoGamesListZA.sort((a, b) => a.name.localeCompare(b.name))
                };
            case PAGINATE:
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstIndex = action.payload === "next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
            
                if (action.payload === "next" && firstIndex >= state.allvideoGamesCopy.length) return state;
                else if (action.payload === "prev" && prev_page < 0) return state;
            
                return {
                    ...state,
                    allVideoGames: [...state.allvideoGamesCopy].splice(firstIndex, ITEMS_PER_PAGE),
                    currentPage: action.payload === "next" ? next_page : prev_page
                };
                case FILTER_BY_GENRE:
                    const genreToFilter = action.payload;
                    const filteredVideoGames = state.allvideoGamesCopy.filter(videoGame => videoGame.genres.includes(genreToFilter));
                    return {
                        ...state,
                        allVideoGames: filteredVideoGames.slice(0, ITEMS_PER_PAGE),
                        currentPage: 0 // Reset currentPage when filtering
                    };
        default:
            return state;
    }
};

export default rootReducer;
