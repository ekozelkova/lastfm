import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ""}
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
    };

    handleSubmit = (event) => {
        let query = this.state.inputValue;
        this.props.onSearch(query);
        event.preventDefault();
    };

    //TODO: implement onEnter()

    render() {
        return (
            <div>
                <span>Поиск:</span>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Название группы"/>
                <button
                    onClick={this.handleSubmit}
                >show results</button>
            </div>
        )
    }
}

export default SearchBar;