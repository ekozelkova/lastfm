import React from 'react';
import './App.css';

class ArtistScreen extends React.Component {
    render() {
        return (
            <div>
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