import React from 'react';
import './App.css';

class SearchResults extends React.Component {

    render () {
        const artists = this.props.results;
        const listItems = artists.map((artist, index) =>
            <li className="search-results__item" key={index}>
                <a href="#" onClick={() => this.props.transitToArtistScreen(artist.name)}>
                    {artist.name}
                </a>
            </li>
        );

        return (
            <ul className="search-results">
                {listItems}
            </ul>
        )
    }
}

export default SearchResults;