import React, { Component } from 'react';
import SearchScreen from "./SearchScreen";
import ArtistScreen from "./ArtistScreen";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'searchResults', results: []};
    }

    transitToSearchScreen = () => {
        this.setState({currentScreen: 'searchResults'})
    };

    transitToArtistScreen = () => {
      this.setState({currentScreen: 'albums'});
    };

    //TODO: add a comment why
    updateResults = (results) => {
      this.setState({results: results})
    };

    render() {
        const currentScreen = this.state.currentScreen;
        let screen = null;

        if(currentScreen === 'searchResults') {
            screen = <SearchScreen transitToArtistScreen={this.transitToArtistScreen} updateResults={this.updateResults} results={this.state.results}/>
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