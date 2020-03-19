export const MOVIES = "MOVIES";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";


export function movies(items){
    const action = {
        type: MOVIES,
        items
    }

    return action;
}


export function addToFavourite(movie){
    return {
        type: ADD_FAV,
        movie
    }
}

export function removeFromFavourite(movie){
    return {
        type: REMOVE_FAV,
        movie
    }
}