import React from 'react';
import './App.css';

class ArtistScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {albums: [], listItems: []}
    }

    //TODO: make a loader

    componentDidMount() {
        let artistName = this.props.artistName;
        console.log(artistName);
        let url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="
            + artistName
            + "&api_key=3195564c027455aa3a38e82fd6dd3e0f&format=json";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                //update state
                console.log(response.topalbums.album);
                this.setState({albums: response.topalbums.album});


            })
        //TODO: check for no albums
    }

    render() {

        const listItems = this.state.albums.map((album, index) =>
            <div className="artist-albums__album" key={index}>
                <img src={album.image[2]["#text"]}/>
            </div>
        );
        //TODO: make here a picture of an album

        return (
            <div className="artist-screen">
                <button type="button" className="artist-screen__back-button btn btn-outline-dark btn-sm" onClick={this.props.transitToSearchScreen}>Назад</button>
                <h5 className="artist-screen__header">Альбомы {this.props.artistName}</h5>
                <div className="artist-albums">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default ArtistScreen;