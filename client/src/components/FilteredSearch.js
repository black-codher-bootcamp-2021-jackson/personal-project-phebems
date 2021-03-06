import React, { useState } from "react";
import { spotifySearch, myReccomendations } from "../services/spotifyService";
import Search from "./Search";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import Nav from "./Nav";
import GenreDropdown from "./GenreDropdown";
import Modal from "./Modal";

function FilteredSearch({ accessToken }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [acoustic, setAcoustic] = useState(0.5);
  const [instrumental, setInstrumental] = useState(0.5);
  const [popular, setPopular] = useState(50);
  const [showModal, setShowModal] = useState(false);

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
    targetAcousticness,
    targetInstrumentalness,
    targetPopularity
  ) {
    if (accessToken) {
      const response = await myReccomendations(
        accessToken,
        seedGenres,
        seedTracks,
        targetAcousticness,
        targetInstrumentalness,
        targetPopularity
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
      acoustic,
      instrumental,
      popular
    );
    getReccomendations(
      accessToken,
      selectedGenres,
      selectedTracks.map((track) => track.id),
      acoustic,
      instrumental,
      popular
    );
    openModal();
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

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="filteredSearch">
      <Nav />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        filtered={filtered}
        getId={getId}
      />
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
      <div className="sliders">
        <div className="slidecontainer">
        <label for="instrumental">acoustic {acoustic}</label>
          <input
          id="acoustic"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={acoustic}
            className="slider"
            onChange={({ target: { value: radius } }) => {
              setAcoustic(radius);
            }}
          />
        </div>

        <div className="slidecontainer">
          <label for="instrumental">instrumental {instrumental}</label>
          <input
          id="instrumental"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={instrumental}
            className="slider"
            onChange={({ target: { value: radius } }) => {
              setInstrumental(radius);
            }}
          />
        </div>
        <div className="slidecontainer">
          <label for="popular"> popularity {popular}</label>

          <input
          id="popular"
            type="range"
            min="0"
            max="100"
            step="1"
            value={popular}
            className="slider"
            onChange={({ target: { value: radius } }) => {
              setPopular(radius);
            }}
          />
        </div>
      </div>

      <button onClick={handleSubmit}>show all</button>

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
    </div>
  );
}

export default FilteredSearch;
