const mongoose = require("mongoose");
const { Schema } = mongoose;
const {genreSchema} = require("./Genre");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: { type: String, required: true },
  preferences: {
    genres: { type : Array , "default" : [] },
  },
});

mongoose.model("users", userSchema);
