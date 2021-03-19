import React, { useState } from 'react';
import './ConnectSpotify.css';
import Spotify from '../../util/Spotify';


export const ConnectSpotify = ({access}) => {
    const [user, setUser] = useState('Connect your Spotify Account')
    const connect = (e) => {
        Spotify.getUserInfo(access).then(userToken => {
            setUser(userToken);
        })
        e.preventDefault();
    }

    return (
        <div className="Connect" title='Click to connect to your Spotify account. You may be prompted to log in and grant access to this app.'>
            <button className="ConnectButton" onClick={connect}> {user} </button>
        </div>
    )
}
