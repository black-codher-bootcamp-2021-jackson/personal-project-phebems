import React, { useState, useEffect } from "react";
import { spotifySearch, myReccomendations } from "../services/spotifyService";
import Nav from "./Nav";
import Track from "./Track";
import TrackList from "./TrackList";
import Search from "./Search";

const Home = ({ accessToken, ...props }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [reccomendations, setReccomendations] = useState([]);

  async function getSearchResults(accessToken, term, type) {
    type = "album,track,artist";
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type);
      setResults(response);
    }
    console.log(results.tracks.items[0]);
  }

  useEffect(() => {
    async function getReccomendations(
      accessToken,
      seedGenres,
      seedTracks,
      targetAcousticness
    ) {
      //seedArtists = ["23zg3TcAtWQy7J6upgbUnj"];
      seedGenres = ["rock", "rnb"];
      seedTracks ='';
      targetAcousticness = 0.5;

      if (accessToken) {
        const response = await myReccomendations(
          accessToken,
          seedGenres,
          seedTracks,
          targetAcousticness
        );
        setReccomendations(response.tracks);
      }
    }
    getReccomendations(accessToken);
  }, [accessToken]);

  if (accessToken != null) {
    return (
      <>
        <Nav />
        <Search
          term={term}
          setTerm={setTerm}
          accessToken={accessToken}
          getSearchResults={getSearchResults}
        />
        <TrackList tracks={reccomendations} />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <p>loading...</p>
      </>
    );
  }
};

export default Home;
