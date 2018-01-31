import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    //on click, on enter
    handleSearch = () => {
        let results = ["hello", "kate"];

        fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=3195564c027455aa3a38e82fd6dd3e0f&format=json')
            .then(function(response){
                return response.json();
            })
            .then(function(response) {
                console.log(response.results.artistmatches.artist)
            });

        /*setTimeout(() => {
            this.props.updateResults(results)
        }, 1000)*/
    };

    render() {
        return(
            <div>
                <SearchBar onSearch={this.handleSearch}/>
                <SearchResults results={this.props.results} transitToArtistScreen={this.props.transitToArtistScreen}/>
            </div>
        )
    }
}

export default SearchScreen;