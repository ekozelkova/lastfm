import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: [], hasSearched: false};
    }

    updateResults = (results) => {
        this.setState({results: results, hasSearched: true});
    };

    //TODO: make a loader (disable button)

    handleSearch = (query) => {
        //Checks for an empty input
        if (query === "") return;

        let url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="
            + query
            + "&api_key=3195564c027455aa3a38e82fd6dd3e0f&format=json";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                //update state

                this.updateResults(response.results.artistmatches.artist);
            });
    };

    render() {
        return(
            <div>
                <SearchBar onSearch={this.handleSearch}/>
                <SearchResults results={this.state.results} hasSearched={this.state.hasSearched} transitToArtistScreen={this.props.transitToArtistScreen}/>
            </div>
        )
    }
}

export default SearchScreen;