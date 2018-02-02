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

    render() {
        return (
                <form className="search-form">
                    <h5 className="search-form__header">Поиск:</h5>
                    <input className="search-form__input" type="text" autoFocus value={this.state.inputValue} onChange={this.handleChange} placeholder="Название группы"/>
                    <button className="search-form__button btn btn-outline-dark btn-sm"
                        onClick={this.handleSubmit}
                    >show results</button>
                </form>
        )
    }
}

export default SearchBar;