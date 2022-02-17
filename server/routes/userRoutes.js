const mongoose = require("mongoose");
const User = mongoose.model("users");

const userRoutes = (app) => {
    app.get(`/api/user`, async (req, res) => {
      const users = await User.find();
  
      return res.status(200).send(users);
    });

    app.use(`/api/user/signup`, async (req, res) => {
      //const user = await User.create(req.body);
  
      return res.status(201).send(req.body);
    });

    app.use("/api/user/login", (req, res) => {
      res.send({
        token: "test123",
      });
    });
  
  };
  module.exports = userRoutes;