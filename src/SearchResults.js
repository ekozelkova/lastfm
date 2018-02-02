import React from 'react';
import './App.css';

class SearchResults extends React.Component {

    render () {
        const artists = this.props.results;
        console.log(artists);
        let listItems;

        //Checks for no artists
        if (this.props.hasSearched) {
            if (artists.length === 0) {
                listItems = <li className="search-results_no-items">Исполнители не найдены</li>
            } else {
                listItems = artists.map((artist, index) =>
                    <li className="search-results__item" key={index}>
                        <a href="#" onClick={() => this.props.transitToArtistScreen(artist.name)}>
                            {artist.name}
                        </a>
                    </li>
                );
            }
        }

        return (
            <ul className="search-results">
                {listItems}
            </ul>
        );
    }
}

export default SearchResults;