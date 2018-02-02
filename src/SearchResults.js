import React from 'react';
import './App.css';

class SearchResults extends React.Component {
    render () {
        const artists = this.props.results;
        let result;

        if (this.props.hasSearched) {
            if (this.props.isLoading) {
                result = <li className="search-alert">Загрузка...</li>
            }
            else if (artists.length === 0) {
                result = <li className="search-alert">Исполнители не найдены</li>
            }
            else {
                result = artists.map((artist, index) =>
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
                {result}
            </ul>
        );
    }
}

export default SearchResults;