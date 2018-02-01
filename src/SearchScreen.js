import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: []};
    }

    //TODO: add a comment why
    updateResults = (results) => {
        this.setState({results: results});
        console.log(results);
    };

    //TODO: make a loader (disable button)

    handleSearch = (query) => {
        let url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="
            + query
            + "&api_key=3195564c027455aa3a38e82fd6dd3e0f&format=json";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                //update state

                this.updateResults(response.results.artistmatches.artist)
            });
        //TODO: check for an empty field
    };

    render() {
        return(
            <div>
                <SearchBar onSearch={this.handleSearch}/>
                <SearchResults results={this.state.results} transitToArtistScreen={this.props.transitToArtistScreen}/>
            </div>
        )
    }
}

export default SearchScreen;