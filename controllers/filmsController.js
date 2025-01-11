const filmCollection = require('../data/filmData');

const listFilms = (req, res) => {
  res.json(filmCollection);
};

const getFilmDetails = (req, res) => {
  const filmId = parseInt(req.params.id);
  const film = filmCollection.find((f) => f.id === filmId);
  if (!film) {
    return res.status(404).json({ error: 'Film not found' });
  }
  res.json(film);
};

const addFilm = (req, res) => {
  const { name, type, year, score } = req.body;
  const newFilm = {
    id: filmCollection.length > 0 ? filmCollection[filmCollection.length - 1].id + 1 : 101,
    name,
    type,
    year,
    score,
  };
  filmCollection.push(newFilm);
  res.status(201).json(newFilm);
};

const modifyFilmScore = (req, res) => {
  const filmId = parseInt(req.params.id);
  const film = filmCollection.find((f) => f.id === filmId);
  if (!film) {
    return res.status(404).json({ error: 'Film not found' });
  }
  film.score = req.body.score;
  res.json(film);
};

const removeFilm = (req, res) => {
  const filmId = parseInt(req.params.id);
  const index = filmCollection.findIndex((f) => f.id === filmId);
  if (index === -1) {
    return res.status(404).json({ error: 'Film not found' });
  }
  const removedFilm = filmCollection.splice(index, 1);
  res.json(removedFilm);
};

module.exports = { listFilms, getFilmDetails, addFilm, modifyFilmScore, removeFilm };