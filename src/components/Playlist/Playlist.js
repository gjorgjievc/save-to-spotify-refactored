import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';


export const Playlist = ({ playlistTracks, removeTrack, updatePlaylistName, savePlaylist }) => {


    return (
        <div className="Playlist">
            <input placeholder="Your playlist"
                    onChange={(e) => updatePlaylistName(e.target.value)}/>
            <TrackList tracks={playlistTracks} 
                        removeTrack={removeTrack}
                        isRemoval={true} 
                        />
            <button className="Playlist-save" onClick={() => savePlaylist()}>Save to Spotify</button>
        </div>
    )
}
