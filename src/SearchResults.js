import React from 'react';
import './App.css';

class SearchResults extends React.Component {
    render () {
        const bands = this.props.results;
        const listItems = bands.map((band) =>
            <li><button onClick={this.props.transitToArtistScreen}>{band}</button></li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default SearchResults;