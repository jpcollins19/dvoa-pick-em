const Sequelize = require("sequelize");
const db = require("../db.js");

const { UUID, UUIDV4, STRING, INTEGER, BOOLEAN } = Sequelize;

const Team = db.define("teams", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
  spread: {
    type: STRING,
  },
  rank: {
    type: INTEGER,
  },
  locked: {
    type: BOOLEAN,
    defaultValue: false,
  },
  lastTeam: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Team;
