import React, { Component } from 'react';
import ArtistScreen from './ArtistScreen.js';
import SearchScreen from "./SearchScreen";
import ResultsScreen from "./ResultsScreen";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchScreen/>

          <ResultsScreen/>

          <ArtistScreen/>
      </div>
    );
  }
}

export default App;
