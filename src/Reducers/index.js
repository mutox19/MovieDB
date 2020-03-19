import movies from './MovieResult-Reducers';
import { combineReducers } from 'redux';
import favourites from './Fav-Reducer'

const rootReducer = combineReducers({
    movies,
    favourites
});

export default rootReducer;