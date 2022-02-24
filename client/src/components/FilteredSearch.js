import React, { useState } from "react";
import { spotifySearch, myReccomendations } from "../services/spotifyService";
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
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [acoustic, setAcoustic] = useState(0.5)

  async function getSearchResults(accessToken, term, type) {
    type = "track,artist";
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type);
      setResults(response);
    }
  }

  async function getReccomendations(
    accessToken,
    seedGenres,
    seedTracks,
    targetAcousticness
  ) {
    if (accessToken) {
      const response = await myReccomendations(
        accessToken,
        seedGenres,
        seedTracks,
        targetAcousticness
      );
      setFiltered(response.tracks);
    }
  }

  function onChange(value) {
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      selectedTracks[0].id,
      selectedGenres.join(","),
      selectedArtists,
      acoustic
    );
    getReccomendations(
      accessToken,
      selectedGenres,
      selectedTracks.map((track) => track.id),
      0.5
    );
  }

  const addTrack = (id) => {
    setSelectedTracks(results.tracks.items.filter((track) => track.id === id));
  };
  const addArtist = (id) => {
    setSelectedArtists(
      results.artists.items.filter((artist) => artist.id === id)
    );
  };

  const getId = (id) => {
    console.log(id);
  };

  return (
    <div className="filteredSearch">
      <Nav />
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
      <div class="slidecontainer">
        target acousticness {acoustic}
         <input type="range" min="0" max="1" step='0.1' value={acoustic} class="slider" onChange={({ target: { value: radius } }) => {
                    setAcoustic(radius);
                  }}
/>
      </div>

      <div>
        {/* <h2>picked</h2> */}
        {selectedTracks.length > 0 ? (
          <TrackList tracks={selectedTracks} getId={getId} />
        ) : (
          ""
        )}
        {selectedArtists.length > 0 ? (
          <ArtistList tracks={selectedTracks} getId={getId} />
        ) : (
          ""
        )}
      </div>
      <div className="results">
        {results.length === 0 ? (
          ""
        ) : (
          <>
            {/* <h2>Songs</h2> */}
            <TrackList
              tracks={results.tracks.items}
              addArtist={addArtist}
              addTrack={addTrack}
              getId={getId}
            />
          </>
        )}
        {/* {results.length === 0 ? (
          ""
        ) : (
          <ArtistList artists={results.artists.items} />
        )} */}
      </div>

      <button onClick={handleSubmit}>show all</button>

      {filtered.length > 0 ? <TrackList tracks={filtered} getId={getId} /> : ""}
    </div>
  );
}

export default FilteredSearch;
