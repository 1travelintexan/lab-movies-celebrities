// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebModel = require("../models/CelebrityModel.model");
const MovieModel = require("../models/MovieModel.models");
router.get("/", async (req, res) => {
  let allMovies = await MovieModel.find();
  res.render("movies/movies", { allMovies });
});

router.get("/create", async (req, res) => {
  let allCelebs = await CelebModel.find();
  res.render("movies/new-movie", { allCelebs });
});

router.post("/create", async (req, res) => {
  console.log("body from movie", req.body);
  MovieModel.create(req.body);
  res.redirect("/movies");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let singleMovie = await MovieModel.findById(id);
  console.log("single movie", singleMovie);
  res.render("movies/movie-details", { singleMovie });
});

module.exports = router;
