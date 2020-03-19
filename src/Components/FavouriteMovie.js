import React , { Component} from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import {BrowserRouter as Router, Link } from 'react-router-dom';

class FavouriteMovie extends Component
{
    render(){
        
        return(
            <div>
                
                    <Link to="/">Home</Link>
                
                
                <h4>Favourite Movies List</h4>
                {this.props.favourites.map(movie => {
                    return <MovieItem movie={movie} key={movie.id} showButton={false}/>
                })}
            </div>
        );
    }
}


function MapStateToProps(state)
{
    console.log(state);
    return{
        favourites: state.favourites
    }
    
}
export default connect(MapStateToProps, null)(FavouriteMovie);

