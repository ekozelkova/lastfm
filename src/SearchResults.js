import React from 'react';
import './App.css';

class SearchResults extends React.Component {
    render () {
        const bands = this.props.results;
        const listItems = bands.map((band) =>
            <li>{band}</li>
        );


        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default SearchResults;