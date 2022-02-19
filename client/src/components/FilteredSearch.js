import { spotifySearch } from "../services/spotifyService";
import React, { useState } from "react";
import Search from './Search';
import Track from './Track';
import Artist from './Artist';

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
        <h2>Songs</h2>
        {results.length === 0 ? '...' : results.tracks.items.map((track) => (
          <Track key={track.id} track={track} />
        ))}
        <h2>Artists</h2>
        {results.length === 0 ? '...' : results.artists.items.map((artist) => (
          <Artist key={artist.id} artist={artist} />
        ))}
        </>
    );
}

export default FilteredSearch;