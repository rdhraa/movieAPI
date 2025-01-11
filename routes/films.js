const express = require('express');
const router = express.Router();
const {
  listFilms,
  getFilmDetails,
  addFilm,
  modifyFilmScore,
  removeFilm,
} = require('../controllers/filmsController');

router.get('/', listFilms);
router.get('/:id', getFilmDetails);
router.post('/', addFilm);
router.patch('/:id', modifyFilmScore);
router.delete('/:id', removeFilm);

module.exports = router;