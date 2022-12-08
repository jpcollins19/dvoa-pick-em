const app = require("express").Router();

const {
  models: { Team },
} = require("../db/index.js");

app.get("/api/teams", async (req, res, next) => {
  try {
    const teams = await Team.findAll();
    res.send(teams);
  } catch (err) {
    next(err);
  }
});

app.post("/api/teams", async (req, res, next) => {
  try {
    const team = await { ...req.body };

    res.status(201).send(await Team.create(team));
  } catch (err) {
    next(err);
  }
});

app.delete("/api/teams/:id", async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.id);
    await team.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
