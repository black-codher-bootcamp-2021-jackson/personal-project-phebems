import { spotifySearch } from "../services/spotifyService";
import React, { useState } from "react";
import Search from './Search';
import TrackList from './TrackList';
import ArtistList from './ArtistList'

function FilteredSearch({accessToken}) {
    const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  async function getSearchResults(accessToken, term, type) {
    type = 'track,artist'
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type
        );
      setResults(response);
      
    
    }console.log(results.tracks.items[0]);
  }

    return (
        <>
        <Search
          term={term}
          setTerm={setTerm}
          accessToken={accessToken}
          getSearchResults={getSearchResults}
        />
        {results.length === 0 ? '...' : <TrackList tracks={results.tracks.items}/>}
        {results.length === 0 ? '...' : <ArtistList artists={results.artists.items}/>}
        </>
    );
}

export default FilteredSearch;