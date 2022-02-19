import React, { useState, useEffect } from "react";
import { spotifySearch, myReccomendations } from "../services/spotifyService";
import Nav from "./Nav";
import Track from "./Track";
import Search from "./Search";

const Home = ({ accessToken, ...props }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [reccomendations, setReccomendations] = useState([]);

  async function getSearchResults(accessToken, term, type) {
    type = 'album,track,artist'
    if (accessToken) {
      const response = await spotifySearch(accessToken, term, type);
      setResults(response);
      
    }console.log(results.tracks.items[0]);
  }

  useEffect(() => {
    async function getReccomendations(accessToken) {
      if (accessToken) {
        const response = await myReccomendations(accessToken);
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
        {reccomendations.map((track) => (
          <Track key={track.id} track={track} />
        ))}
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
