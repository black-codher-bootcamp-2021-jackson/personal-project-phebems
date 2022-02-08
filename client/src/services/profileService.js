// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";
const qs = require("qs");

const getAllProfiles = async () => {
  const response = await axios.get(`/api/profile`);

  return response.data || [];
};

const client_id = process.env.spotify_client_id;
const client_secret = process.env.spotify_client_secret;
const auth_token =
  "YmQ0NjFiN2UwNDRmNGU5NTgzYzU0ZWUzMDcwMTFlNDc6Njk1MTgzNGM5OWVlNGQ0YzkzNzgyOTY4YjEwOTQ4ZDE=";
//Buffer.from(client_id + ":" + client_secret).toString("base64");
const getAuth = async () => {
  const data = qs.stringify({ grant_type: "client_credentials" });
  //console.log(auth_token);
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    data,
    {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(data.access_token)
  return response.data.access_token;
};

const myReccomendations = async (accessToken) => {
  
  const response = await axios.get(
    "https://api.spotify.com/v1/recommendations?limit=100&market=ES&seed_artists=23zg3TcAtWQy7J6upgbUnj&seed_genres=r-n-b",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  //console.log(accessToken);
  return response.data;
};

const spotifySearch = async (accessToken, term) => {
  
  const response = await axios.get(
    `https://api.spotify.com/v1/search?query=${term}&type=album,track,artist&market=GB&include_external=audio`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(data);
  return response.data;
};

// All of the endpoints in this file can be exported below
export { getAllProfiles, getAuth, myReccomendations, spotifySearch };
