const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema({ name: String });

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
    type: [genreSchema],
    default: undefined
  },
});

mongoose.model("users", userSchema);
