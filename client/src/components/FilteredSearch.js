import React, { useState } from "react";
import { spotifySearch } from "../services/spotifyService";
import Search from "./Search";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import Nav from "./Nav";
import GenreDropdown from "./GenreDropdown";

function FilteredSearch({ accessToken }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  async function getSearchResults(accessToken, term, type) {
    type = "track,artist";
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type);
      setResults(response);
    }
  }

  function onChange(value) {
    console.log(value);
  }

  return (
    <div className="filteredSearch">
      <Nav />
      <Search
        term={term}
        setTerm={setTerm}
        accessToken={accessToken}
        getSearchResults={getSearchResults}
      />
      <GenreDropdown onChange={onChange} />
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
      </div>
    </div>
  );
}

export default FilteredSearch;
