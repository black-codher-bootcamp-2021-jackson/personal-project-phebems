require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

// IMPORT YOUR SCHEMAS HERE
require("./models/Profiles");
require("./models/User")
require("./models/Genre")
const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cors());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/profilesRoutes")(app); 
require("./routes/routes")(app);
require("./routes/userRoutes")(app);
require("./routes/genreRoutes")(app);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
