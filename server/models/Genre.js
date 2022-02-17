const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema({ type: String});



mongoose.model("genre", genreSchema);
