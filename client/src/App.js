import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Preferences from "./components/Preferences";
import useLoginToken from "./components/useLoginToken";
import FilteredSearch from "./components/FilteredSearch";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAuth } from "./services/spotifyService";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  //const [userToken, setUserToken] = useState();
  const {userToken, setUserToken} = useLoginToken()
  

// const addTrack = (id) => {
//   setSelectedTracks(selectedTracks.concat(results.filter((track) => track.id === id)));
//   setResults([
//     ...results.map((track) => {
//       if (track.id === id) {
//         track.selected = true;
//       }
//       return track;
//     }),
//   ]);
// };

  useEffect(() => {
    async function getToken() {
      if (!accessToken) {
        const response = await getAuth();
        setAccessToken(response);
      }
    }
    console.log(accessToken);
    getToken();
  });

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accessToken={accessToken} />} />
          <Route
            path="/log-in"
            element={
              <LogIn userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/preferences"
            element={
              <Preferences setUserToken={setUserToken} userToken={userToken} />
            }
          />
<Route
            path="/filtered-search"
            element={
              <FilteredSearch accessToken={accessToken} />
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
