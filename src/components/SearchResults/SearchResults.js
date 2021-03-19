import React from 'react';
import './SearchResults.css'; 
import {TrackList} from '../TrackList/TrackList';


export const SearchResults = ({searchResults, addTrack}) => {
    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList tracks={searchResults} 
                        addTrack={addTrack}
                        isRemoval={false}/>
        </div>
    )
}
