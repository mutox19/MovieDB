import { ADD_FAV, REMOVE_FAV } from '../Actions'

export default function UpdateFavourite(state = [], action) {
    switch(action.type)
    {
        case ADD_FAV:

            console.log("Movie has been added", action.movie);
            let favouriteMovie = [...state, action.movie];
            return favouriteMovie;

            case REMOVE_FAV:

            console.log("Movie has been added", action.movie);
            let favouritedMove = state.filter(item => item.id !== action.movie.id);
            return favouritedMove;

         default:
            return state;
            
    }
}

