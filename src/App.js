import React, { Component } from 'react';
import SearchScreen from "./SearchScreen";
import ArtistScreen from "./ArtistScreen";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'searchResults', artistName: null, results: []};
    }

    transitToSearchScreen = () => {
        this.setState({currentScreen: 'searchResults'})
    };

    transitToArtistScreen = (artistName) => {
      this.setState({currentScreen: 'albums', artistName: artistName});

    };

    //TODO: add a comment why
    updateResults = (results) => {
      this.setState({results: results});
    };

    render() {
        const currentScreen = this.state.currentScreen;
        let screen = null;

        if(currentScreen === 'searchResults') {
            screen =
                <SearchScreen transitToArtistScreen={this.transitToArtistScreen}
                updateResults={this.updateResults}
                results={this.state.results}/>

        } else if(currentScreen === 'albums') {
            screen = <ArtistScreen transitToSearchScreen={this.transitToSearchScreen} artistName={this.state.artistName}/>
        }

        return (
          <div className="App">
              {screen}
          </div>
        );
    }
}

export default App;