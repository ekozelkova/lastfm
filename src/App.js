import React, { Component } from 'react';

import SearchScreen from "./SearchScreen.js";


import './App.css';
import ArtistScreen from "./ArtistScreen";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'searchResults'};
    }

    transitToSearchScreen = () => {
        this.setState({currentScreen: 'searchResults'})
    };

    transitToArtistScreen = () => {
      this.setState({currentScreen: 'albums'})
    };



    render() {
        const currentScreen = this.state.currentScreen;
        let screen = null;

        if(currentScreen === 'searchResults') {
            screen = <SearchScreen transitToArtistScreen={this.transitToArtistScreen}/>
        } else if(currentScreen === 'albums') {
            screen = <ArtistScreen transitToSearchScreen={this.transitToSearchScreen}/>
        }

        return (
          <div className="App">

              {screen}


          </div>
        );
    }
}

export default App;
