const express = require("express")
const router = express.Router()
const movieControllers =  require("../Controllers/movieControllers")



  router.get("/movies", movieControllers.getAllMovies)
  router.post("/movies", movieControllers.addMovie)
  router.put("/movies/:id", movieControllers.updateMovie)
  router.delete("/movies/:id", movieControllers.deleteMovie)


  module.exports = {movieRouter : router}