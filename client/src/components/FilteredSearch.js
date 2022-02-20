import React, { useState, useEffect } from "react";
import { spotifySearch } from "../services/spotifyService";
import { getGenres } from "../services/genreService";
import Search from "./Search";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import GenreList from "./GenreList"
import Nav from "./Nav";

function FilteredSearch({ accessToken }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function availableGenres() {
        const response = await getGenres();
        setGenres(response);      
    }
    availableGenres();
  }, []);

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
        <GenreList genres={genres}/>
      </div>
    </>
  );
}

export default FilteredSearch;
