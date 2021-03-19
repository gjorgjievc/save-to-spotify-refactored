import React from 'react';
import './Track.css';

 export const Track = ({track, addTrack, removeTrack, isRemoval }) => {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p> {track.artist} | {track.album}</p>
            </div>
            {isRemoval 
                ?  <button className="Track-action" onClick={() => removeTrack(track)}> - </button> 
                :  <button className="Track-action" onClick={() => addTrack(track)}> + </button>
            }
            {/* {renderAction(track)} */}
        </div>
     )
 } 
