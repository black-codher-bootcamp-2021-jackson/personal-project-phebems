import React, { useState, useEffect } from "react";
import { spotifySearch } from "../services/spotifyService";
import { getGenres } from "../services/genreService"
import Search from "./Search";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import Nav from "./Nav";

function FilteredSearch({ accessToken }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    async function availableGenres(accessToken) {
      if (accessToken) {
        const response = await getGenres();
        console.log(response)
      }
    }
availableGenres(accessToken)  }, [accessToken]);

  async function getSearchResults(accessToken, term, type) {
    type = "track,artist";
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type);
      setResults(response);
    }
  }

  return (
    <>
      <Nav />
      <Search
        term={term}
        setTerm={setTerm}
        accessToken={accessToken}
        getSearchResults={getSearchResults}
      />
      <div className="results">
        {results.length === 0 ? (
          "..."
        ) : (
          <TrackList tracks={results.tracks.items} />
        )}
        {results.length === 0 ? (
          "..."
        ) : (
          <ArtistList artists={results.artists.items} />
        )}
        {}
      </div>
    </>
  );
}

export default FilteredSearch;
