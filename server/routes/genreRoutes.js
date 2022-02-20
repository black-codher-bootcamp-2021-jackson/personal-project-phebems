const mongoose = require("mongoose");
const Genre = mongoose.model("genres");

const genreRoutes = (app) => {
    app.get(`/api/available-genres`, async (req, res) => {
      const genres = await Genre.find();
  
      return res.status(200).send(genres);
    });
  };
  module.exports = genreRoutes;