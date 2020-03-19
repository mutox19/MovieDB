import React, {Component} from 'react';
import Search from './Search';
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import FavouriteMovie from './FavouriteMovie';
import {Link } from 'react-router-dom';


class MovieResult extends Component{

    render(){
        return (
        <div className="movieResults col-sm-10">
            
            <hr />
            <Link to="/fav">Favourites</Link>
            
            
            <Search />
            {this.props.movies.map(item => 
                { return <MovieItem key={item.id} movie={item} showButton={true}/>;}
                )}
        </div>);
    }
}

function MapStateToProps(state)
{
    console.log(state);
    return{
        movies:state.movies
    }
    
}


export default connect(MapStateToProps, null)(MovieResult);