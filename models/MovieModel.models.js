const { Schema, model } = require("mongoose");
const CelebModel = require("./CelebrityModel.model");

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: CelebModel }],
  },
  {
    timestamps: true,
  }
);

const MovieModel = model("movie", movieSchema);

module.exports = MovieModel;
