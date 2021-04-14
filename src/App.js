import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Favorites from './Favorites';

class App extends Component {

  state = {
    characters: [],
    favorites: []
  }

  setFavorite = (character) => {
    const findMatch = this.state.favorites.find(
      (favorite) => character === favorite
    );

    if(!findMatch){
      this.setState({
        favorites: [...this.state.favorites, character],
      })
    }
  };

  removeFavorite = (character) => {
    let newFavorites = this.state.favorites.filter(
      favorite => character !== favorite
    );
    
    this.setState({favorites: newFavorites});
  }


  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character?page=2')
      .then(response => response.json())
      .then(({results}) => this.setState({
        characters: results
    }))
  }
  
  render(){
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} clickAction={this.removeFavorite}/> 
        <CharacterList characters={this.state.characters} clickAction={this.setFavorite}/>
      </div>
    );
  }
}

export default App;
