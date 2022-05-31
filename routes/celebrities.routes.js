// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const async = require("hbs/lib/async");
const CelebModel = require("../models/CelebrityModel.model");
// all your routes here
router.get("/", async (req, res) => {
  let allCelebs = await CelebModel.find();
  res.render("celebrities/celebrities", { allCelebs });
});

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  try {
    console.log("req.body:", req.body);
    await CelebModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    console.log("There was an error creating a celebrity,", err);
  }
});
module.exports = router;
