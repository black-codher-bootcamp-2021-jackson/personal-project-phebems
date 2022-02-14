import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Preferences from "./components/Preferences";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAuth } from "./services/profileService";

function App() {
  const [accessToken, setAccessToken] = useState(null);

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
    <div className="
    container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home accessToken={accessToken} />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
