const {v4 : uuid} = require("uuid")

let db = [
  {
    "id": 1,
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi",
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "The Matrix",
    "director": "Lana & Lilly Wachowski",
    "year": 1999,
    "genre": "Sci-Fi",
    "rating": 8.7
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "year": 2008,
    "genre": "Action",
    "rating": 9.0
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "genre": "Crime",
    "rating": 8.9
  },
  {
    "id": 5,
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "rating": 9.3
  }
]



const getAllMovies = (req, res) => {
      try {
        res.json(db)  
      } catch (error) {
        res.json({err : error.message})
      }
  }


const addMovie = (req, res) => {
    try {
      db.push({...req.body, id : uuid()})
      res.json(db)
    } catch (error) {
      res.json({err : error.message})
      
    }
  }


const updateMovie = (req, res) => {

  try {
    const{id} = req.params
    let filArr = db.filter((item) => {
        return item.id != id
    })
    filArr.push({...req.body, id : id})
    db = filArr
    res.json(db)
  } catch (error) {
    res.json({err : error.message})
  }

  }

const deleteMovie = (req, res) => {

    try {
      const{id} = req.params
      let filArr = db.filter((item) => {
          return item.id != id
      })
      db = filArr
      res.json(db)
    } catch (error) {
      res.status(404).json({err : error.message})
    }
  }


  module.exports = {getAllMovies, addMovie, deleteMovie, updateMovie}