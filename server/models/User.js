const mongoose = require("mongoose");
const { Schema } = mongoose;
const {genreSchema} = require("./Genre");

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: { type: String, required: true },
  preferences: {
    genres: [{
      _id : {$oid: {type: String}},
      name: String
       }]
  },
});

mongoose.model("users", userSchema);
