import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import { addToFavourite, removeFromFavourite } from '../Actions';
import { connect } from 'react-redux';




const urlComponent = 'https://image.tmdb.org/t/p/w300/'
const movieUrl = 'https://www.themoviedb.org/movie/';

class MovieItem extends Component{

    constructor(props){
        super(props);

        this.state = {
            favourited: false
        };
    }

    addToFavourite()
    {
        this.setState({favourited: !this.state.favourited});
        this.props.addToFavourite(this.props.movie);
    }
    removeFromFavourite()
    {
        this.setState({favourited: !this.state.favourited});
        this.props.removeFromFavourite(this.props.movie);
    }
    DisplayFavourite()
    {
        if(!this.state.favourited)
        {
            return <span className="glyphicon glyphicon-heart-empty" onClick={()=>this.addToFavourite()}></span>
        }
        else 
        {
            return <span className="glyphicon glyphicon-heart" onClick={()=> this.removeFromFavourite()}></span>
        }
    }
    render()
    {
        console.log(this.props);
        
        return(
            
            <div className="movieItem col-sm-12 col-sm-3">
                <div className="row">
                    
                        
                    
                    <div className="col-sm-4">
                    <a href={movieUrl + this.props.movie.id} target="_blank">
                        <Image src={urlComponent + this.props.movie.poster_path} width="80%" rounded fluid/>
                        </a>
                        <p className="favourite-btn">{this.props.showButton ? this.DisplayFavourite() : null}</p>
                    </div>
                    <div className="col-sm-8">
                        <h3><strong>{this.props.movie.title}</strong></h3><br />
                        <p>{this.props.movie.overview}</p>
                        <p>Rating - <span className="glyphicon glyphicon-star">{this.props.movie.vote_average}</span></p>
                        <p><strong>Date of release: </strong>{this.props.movie.release_date}</p>
                        <hr />
                    </div>
                    
                </div>
            </div>)
        }
}

export default connect(null, { addToFavourite, removeFromFavourite })(MovieItem);