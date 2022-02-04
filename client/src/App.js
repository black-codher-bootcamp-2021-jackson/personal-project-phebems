import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./services/components/Home";
import Track from "./services/components/Track";

// SERVICES THAT CALL OUR API ENDPOINTS
import {
  getAuth,
  myReccomendations,
} from "./services/profileService";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [reccomendations, setReccomendations] = useState(null);

  useEffect(() => {
    async function getToken() {
      if (!accessToken) {
        const response = await getAuth();
        setAccessToken(response);
      }
    }
    console.log(accessToken)
    getToken();
  },);

  useEffect(() => {
    async function getReccomendations(accessToken) {
      if (accessToken) {
        const response = await myReccomendations(accessToken);
        setReccomendations(response.tracks);
      }
    }
    getReccomendations(accessToken);
  }, [accessToken]);
//console.log(reccomendations[0].album.images[2].url);

  return (
    <div>
       {reccomendations!= null ? reccomendations.map((track) => <Track track={track}/>): 'waiting'}
       {reccomendations!= null ?  <Track track={reccomendations[0]}/> : 'waiting'}
      

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
