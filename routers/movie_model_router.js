const app = require("express").Router();

const {
  models: { Movie },
} = require("../db/postgres_info.js");

app.get("/api/movies", async (req, res, next) => {
  try {
    const movies = await Movie.findAll({
      order: [
        ["stars", "DESC"],
        ["name", "ASC"],
      ],
    });
    res.send(movies);
  } catch (err) {
    next(err);
  }
});

app.post("/api/movies", async (req, res, next) => {
  try {
    const movie = await { ...req.body };
    res.status(201).send(await Movie.create(movie));
  } catch (err) {
    next(err);
  }
});

app.delete("/api/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    await movie.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// app.put("/api/movies/:id", async (req, res, next) => {
//   try {
//     let movie = await Movie.findByPk(req.params.id);
//     await movie.update(req.body);
//     await movie.save();
//     res.send(movie);
//   } catch (err) {
//     next(err);
//   }
// });

app.put("/api/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);

    await movie.update({ ...req.body });

    await movie.save();
    res.send(movie);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
