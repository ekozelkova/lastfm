import React from 'react';
import './App.css';

class SearchResults extends React.Component {
    render () {
        const artists = this.props.results;
        const listItems = artists.map((artist, index) =>
            <li key={index}>
                <button onClick={() => this.props.transitToArtistScreen(artist.name)}>
                    {artist.name}
                    </button>
            </li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default SearchResults;