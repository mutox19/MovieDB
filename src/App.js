import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MovieResults from './Components/MovieResults';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavouriteMovie from './Components/FavouriteMovie';


function App() {
  return (
    <div className="app-container">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <h2 className="loveMovies">Who Doesnt Love Movies?</h2>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route  exact path="/" component={MovieResults}></Route>
              <Route path="/fav" component={FavouriteMovie}></Route>
            </Switch>
          </Router>
          </div>
        </div>
    </div>
    
  );
}

export default App;
