import React, { useState, useEffect } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import {ConnectSpotify} from '../ConnectSpotify/ConnectSpotify';

function App() {
    const [ accessToken, setAccessToken ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ playlistName, setPlaylistName ] = useState('New Playlist');
    const [ playlistTracks, setPlaylistTracks ] = useState([]);

    useEffect(() => {
        setAccessToken(Spotify.getAccessToken())
    }, []);
    
    //add track to playlist 
    const addTrack = (track) => {
        const tracks = [...playlistTracks];
        if(tracks.find(savedTrack => savedTrack.id === track.id)) {
            return; 
        } else {
            tracks.push(track);
            setPlaylistTracks(tracks)
        }
    }

    // remove track from playlist
    const removeTrack = (track) => {
        let tracks = playlistTracks
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        setPlaylistTracks([...tracks]);
    }

    const updatePlaylistName = (name) => {
        setPlaylistName(name)
    }

    // save playlist to spotify 
    // calls the function from Spotify.js
    const savePlaylist = () => {
        const trackUris = playlistTracks.map(track => track.uri);
        Spotify.savePlayList(playlistName, trackUris).then(() => {
            setPlaylistTracks([])
            setPlaylistName('New Playlist')
        })
        console.log(trackUris)
    }
    
    const search = (term) => {
        Spotify.search(term).then(NewSearchResults => {
            setSearchResults(NewSearchResults)
        })
    }

    return(
    <div>
        <h1>Playlist creator for Spotify</h1>
        <div  className="App">
          <ConnectSpotify access={accessToken} />
          <SearchBar search={search}/>
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack} />
            <Playlist playlistName={playlistName}
                      playlistTracks={playlistTracks} 
                      removeTrack={removeTrack} 
                      updatePlaylistName={updatePlaylistName} 
                      savePlaylist={savePlaylist} />
          </div>
        </div>
    </div>
    );
}

export default App;