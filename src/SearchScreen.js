import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    //on click, on enter

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
                console.log(response);
                this.props.updateResults(response.results.artistmatches.artist)
            });
        //TODO: check for an empty field
    };

    render() {
        return(
            <div>
                <SearchBar onSearch={this.handleSearch}/>
                <SearchResults
                               results={this.props.results}
                               transitToArtistScreen={this.props.transitToArtistScreen}/>
            </div>
        )
    }
}

export default SearchScreen;