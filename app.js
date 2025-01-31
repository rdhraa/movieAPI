const express = require('express');
const app = express();
const filmsRouter = require('./routes/films');

app.use(express.json());
app.use('/movies', filmsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server starts");
});