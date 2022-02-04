const client_id = process.env.spotify_client_id;
const client_secret = process.env.spotify_client_secret;
// const data = qs.stringify({ grant_type: "client_credentials" });

const auth_token =
  "YmQ0NjFiN2UwNDRmNGU5NTgzYzU0ZWUzMDcwMTFlNDc6Njk1MTgzNGM5OWVlNGQ0YzkzNzgyOTY4YjEwOTQ4ZDE=";
//Buffer.from(client_id + ":" + client_secret).toString("base64");

const routes = (app) => {
  app.post("/api/auth_token", async (req, res) => {
      const response = await app.post("https://accounts.spotify.com/api/token", {
  headers: {
    Authorization: `Basic ${auth_token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
});
    return res.status(201).send({ response });
  });
};
// console.log(auth_token);
// const response = await app.post("https://accounts.spotify.com/api/token", {
//   headers: {
//     Authorization: `Basic ${auth_token}`,
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   form: {
//     grant_type: "client_credentials",
//   },
//   json: true,
// });
//   console.log(accessToken)
//   const response = await axios.get('https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=23zg3TcAtWQy7J6upgbUnj&seed_genres=r-n-b',{
//     headers: {
//       Authorization:`Bearer ${accessToken}`
//     },
//   })
//   console.log(response.data.tracks)

module.exports = routes;
