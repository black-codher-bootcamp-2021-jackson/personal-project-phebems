const mongoose = require("mongoose");
const User = mongoose.model("users");

const userRoutes = (app) => {
    app.get(`/api/user`, async (req, res) => {
      const users = await User.find();
  
      return res.status(200).send(users);
    });
  
  };
  
  module.exports = userRoutes;