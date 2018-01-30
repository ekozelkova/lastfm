import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    //on click, on enter
    handleSearch = () => {
        let results = ["hello", "kate"];
        setTimeout(() => {
            this.props.updateResults(results)
        }, 1000)
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