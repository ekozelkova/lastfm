import React from 'react';
import './App.css';

class ArtistScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {albums: []}
    }

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
                console.log(response);
                this.setState({albums: response.topalbums.album});
                //console.log(this.props.id.albums);
            })
        //TODO: check for no albums
    }

    render() {
        return (
            <div>
                <button onClick={this.props.transitToSearchScreen}>Назад к списку исполнителей</button>
                <header>Альбомы {this.props.artistName}</header>

                <div className="artist-albums">
                    <div className="album"></div>

                </div>
            </div>
        )
    }
}

export default ArtistScreen;