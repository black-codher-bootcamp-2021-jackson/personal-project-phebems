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
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [genres, setGenres] = useState([]);

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedGenres.join());
  }

  const addTrack = (id) => {
    setSelectedTracks(selectedTracks.concat(results.filter((track) => track.id === id)));
    setResults([
      ...results.map((track) => {
        if (track.id === id) {
          track.selected = true;
        }
        return track;
      }),
    ]);
  };

  const getId = (id) => {
    console.log(id)
};

  return (
    <div className="filteredSearch">
      <Nav />
      <form onSubmit={handleSubmit}>
        <Search
          term={term}
          setTerm={setTerm}
          accessToken={accessToken}
          getSearchResults={getSearchResults}
        />
        <GenreDropdown
          onChange={onChange}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
        />
        <input type="submit" />
      </form>
<div>
  {/* {<TrackList tracks={selectedTracks} getId={getId}/>} */}
</div>
      <div className="results">
        {results.length === 0 ? (
          ""
        ) : (
          <TrackList tracks={results.tracks.items} getId={getId}/>
        )}
        {results.length === 0 ? (
          ""
        ) : (
          <ArtistList artists={results.artists.items} />
        )}
      </div>
    </div>
  );
}

export default FilteredSearch;
