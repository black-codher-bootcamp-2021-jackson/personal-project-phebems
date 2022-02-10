import React, { useState } from "react";
import { spotifySearch } from "../services/profileService";
import Nav from "./Nav";
import Track from "./Track";
import Search from "./Search";

const Home = ({reccomendations,accessToken,...props}) => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    async function getSearchResults(accessToken, term) {
        if (accessToken) {
          const response = await spotifySearch(accessToken, term);
          setResults(response);  
          console.log(results)
        }
      }
      if (accessToken != null) {
        return (
          <div className="container">
            <Nav/>
            <Search term={term} setTerm={setTerm} accessToken={accessToken} getSearchResults={getSearchResults} spotifySearch={spotifySearch}/>
            {reccomendations.map((track) => <Track key={track.id}track={track}/>)}  

        </div>
        )
      } else {
        return (
          <div className="container">
            <Nav/>
            <p>loading...</p>
        </div>
        )
      }
}

export default Home;