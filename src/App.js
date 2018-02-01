import React, { Component } from 'react';
import SearchScreen from './SearchScreen';
import ArtistScreen from './ArtistScreen';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'albums', artistName: 'muse'};
    }

    transitToSearchScreen = () => {
        this.setState({currentScreen: 'searchResults'})
    };

    transitToArtistScreen = (artistName) => {
      this.setState({currentScreen: 'albums', artistName: artistName});
    };


    render() {
        const currentScreen = this.state.currentScreen;
        let isHidden = (currentScreen === 'searchResults') ? '' : 'hidden';
        console.log(isHidden);

        let artistScreen = null;
        if (currentScreen === 'albums') {
            artistScreen = <ArtistScreen transitToSearchScreen={this.transitToSearchScreen} artistName={this.state.artistName}/>
        }

        return (
          <div className='App'>
              <div className={(currentScreen === 'searchResults') ? '' : 'hidden'}>
                <SearchScreen transitToArtistScreen={this.transitToArtistScreen} />
              </div>
              {artistScreen}
          </div>
        );
    }
}

export default App;