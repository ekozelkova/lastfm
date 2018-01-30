import React from 'react';
import SearchResults from './SearchResults.js';
import SearchBar from "./SearchBar";

class SearchScreen extends React.Component {
    constructor() {
        super();

        this.state = {results: []}
    }

    handleSearch = () => {
        //on click, on enter
        setTimeout(() => {
            this.setState({results: ["hello", "world"]});
        }, 2000)
    };

    render() {
        return(
            <div>
                <SearchBar onSearch={this.handleSearch}/>
                <SearchResults results={this.state.results}/>
            </div>
        )
    }
}

export default SearchScreen;