import { MOVIES } from '../Actions'

export default function movies(state = [], action)
{
    switch(action.type)
    {
        case MOVIES:
            console.log("movies are here", action.items);
        return action.items;
        default:
            return state;
        
    }    
}