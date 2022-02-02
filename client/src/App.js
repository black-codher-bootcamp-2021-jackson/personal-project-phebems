import { response } from "express";
import React, { useState, useEffect } from "react";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles, getAuth, myReccomendations } from "./services/profileService";

function App() {
  const [profiles, setProfiles] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const[reccomendations, setReccomendations]=useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  useEffect(() => {
    async function getToken() {
      if (!accessToken) {
        const response = await getAuth();
        setAccessToken(response);
      }
    }

    getToken();
  }, [accessToken]);

  useEffect(() => {
    async function getReccomendations(accessToken) {
      if (accessToken) {
        const response = await myReccomendations(accessToken);
        setReccomendations(response);
      }
    }
    getReccomendations();
    console.log(reccomendations)
  }, [accessToken])

  // async function getReccomendations(accessToken) {
  //   const url ='https://api.spotify.com/v1/recommendations/available-genre-seeds'
  //   const results = await fetch(url).then((res) => res.json());
  //   if (!results.error) {
  //     setReccomendations(results);
  //     //results.results.filter((item) => !basketIds.includes(item.trackId))
      
  //   }
  // }

  
  
  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };
  console.log()

  return (
    <div>
      {/* <p>{reccomendations.map((track)=>track.name)}</p> */}
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
