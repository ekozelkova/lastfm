import React from 'react';
import './App.css';

class ArtistScreen extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.transitToSearchScreen}>Назад к списку исполнителей</button>
                <header>Альбомы Би-2</header>

                <div className="artist-albums">
                    <div className="album"></div>
                    <div className="album"></div>
                    <div className="album"></div>
                    <div className="album"></div>
                </div>
            </div>
        )
    }
}

export default ArtistScreen;