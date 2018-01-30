import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <span>Поиск:</span>
                <input placeholder="Название группы"/>
                <button
                    onClick={this.props.onSearch}
                >show results</button>
            </div>
        )
    }
}

export default SearchBar;