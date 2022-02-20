const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema(
    {
        _id: {
          $oid: {type: String, required: true},
        },
        name: {type: String, required: true},
      }
);



mongoose.model("genres", genreSchema);
