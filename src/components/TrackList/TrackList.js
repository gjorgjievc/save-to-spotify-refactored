import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export const TrackList = ({tracks, removeTrack, addTrack, isRemoval }) =>{
    return(
        <div className="TrackList">
            {
            tracks.map(track => {
                return <Track 
                    track={track} 
                    key={track.id} 
                    addTrack={addTrack} 
                    removeTrack={removeTrack} 
                    isRemoval={isRemoval} 
                    />
                })                                        
            }
        </div> 
    )
} 