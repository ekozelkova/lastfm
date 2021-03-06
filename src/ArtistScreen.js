import React from 'react';
import './App.css';

class ArtistScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            listItems: [],
            isLoading: true
        }
    }

    componentDidMount() {
        let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="
            + this.props.artistName
            + "&api_key=3195564c027455aa3a38e82fd6dd3e0f&format=json";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.setState({
                    albums: response.topalbums.album,
                    isLoading: false
                });
            })
    }

    render() {
        let result;
        if (this.state.isLoading) {
            result = <p className="search-alert">Загрузка...</p>
        }
        else if (this.state.albums.length !== 0) {
            result = this.state.albums.map((album, index) =>
                <div className="artist-albums__album" key={index}>
                    <img src={album.image[2]["#text"] || "/images/no_album_cover.png"} alt="album cover"/>
                </div>
            );
        }
        else {
            result = <p className="search-alert">У этого исполнителя нет альбомов</p>;
        }

        return (
            <div className="artist-screen">
                <button
                    type="button"
                    className="artist-screen__back-button btn btn-outline-dark btn-sm"
                    onClick={this.props.transitToSearchScreen}>Назад</button>

                <h5 className="artist-screen__header">Альбомы {this.props.artistName}</h5>
                <div className="artist-albums">
                    {result}
                </div>
            </div>
        )
    }
}

export default ArtistScreen;