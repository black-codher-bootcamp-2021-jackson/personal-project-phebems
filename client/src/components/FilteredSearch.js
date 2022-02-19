import { spotifySearch } from "../services/spotifyService";
import React, { useState } from "react";
import Search from './Search';
import Artist from './Artist';
import TrackList from './TrackList';

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
        <TrackList tracks={results}/>
        <h2>Artists</h2>
        {results.length === 0 ? '...' : results.artists.items.map((artist) => (
          <Artist key={artist.id} artist={artist} />
        ))}
        </>
    );
}

export default FilteredSearch;