const loginRoutes = (app) => {
  app.use("/api/login", (req, res) => {
    res.send({
      token: "test123",
    });
  });
};

module.exports = loginRoutes;
