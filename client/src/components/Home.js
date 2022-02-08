import React, { useState } from "react";
import { spotifySearch } from "../services/profileService";
import Nav from "./Nav";
import Track from "./Track";
import Search from "./Search";

const Home = ({reccomendations,accessToken,...props}) => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    async function getSearchResults(accessToken, term) {
        if (props.accessToken) {
          const response = await spotifySearch(accessToken, term);
          setResults(response);  
          console.log(response)
        }
      }
    return (
        <div className="container">
            <Nav/>
            <Search term={term} setTerm={setTerm} accessToken={props.accessToken} getSearchResults={getSearchResults} spotifySearch={spotifySearch}/>
            {reccomendations.map((track) => <Track key={track.id}track={track}/>)}  

        </div>
    )
}

export default Home;